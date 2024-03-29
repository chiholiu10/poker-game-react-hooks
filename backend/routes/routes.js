const express = require('express');
const router = express.Router();
const SignUp = require('../models/signup.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
dotenv.config();

const generateAccessToken = (username) => {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
};

router.post('/signup', async (request, response) => {
  const body = request.body.data;
  const salt = await bcrypt.genSalt(10);
  let hashPassword = await bcrypt.hashSync(body.password, salt);

  const signUpUser = new SignUp({
    username: body.username,
    email: body.email,
    password: hashPassword,
  });

  signUpUser.save()
    .then(data => {
      responsestatus(200).json({ message: "successfully registered", data: data });;
    })
    .catch(error => {
      response.status(200).json({ message: "register not right", error: error });
    });
});

router.post('/login', async (request, response) => {
  const { username, password } = request.body.data;
  const User = SignUp;
  const user = await User.findOne({ username: username });
  const token = await generateAccessToken({ username: username });

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      response.status(200).json({ message: "Valid password", token: token });
    } else {
      response.status(200).json({ message: "Invalid password" });
    }
  } else {
    response.status(401).json({ message: "User does not exist" });
  }
});

router.post('/reset-password', async (request, response) => {
  const { email } = request.body.data;
  const User = SignUp;
  await User.findOne({ email: email }).then(user => {
    if (email !== user.email) {
      response.status(200), json({ message: "Email doesn't exist" });
      return;
    }
    const secret = process.env.JWT_SECRET + user.password;
    const payload = {
      email: user.email,
      id: user.id
    };

    const token = jwt.sign(payload, secret, { expiresIn: '15m' });
    const link = `http://localhost:8080/app/reset-password/${user.id}/${token}`;
  });
});

router.get('/reset-password/:id/:token', async (request, response, next) => {
  const { id, token } = request.params;
  const { password, password2 } = request.body.data;
  const User = SignUp;
  const user = await User.findOne({ _id: id });
  if (id !== user._id) {
    response.send('Invalid id');
    return;
  }

  const secret = process.env.JWT_SECRET + user.password;

  try {
    const payload = jwt.verify(token, secret);
    user.password = password;
    response.send(user);
    response.send(request.params);
  } catch (error) {
    console.log(error.message);
    response.send(error.message);
  }
});

console.log(require('crypto').randomBytes(256).toString('base64'));
module.exports = router;