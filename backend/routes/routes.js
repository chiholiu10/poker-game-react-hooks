const express = require('express');
const router = express.Router();
const signUp = require('../models/signup.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateAccessToken = (username) => {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
};

router.post('/signup', async (request, response) => {
  const body = request.body.data;
  const salt = await bcrypt.genSalt(10);
  let hashPassword = await bcrypt.hashSync(request.body.data.password, salt);

  const signUpUser = new signUp({
    username: body.username,
    email: body.email,
    password: hashPassword,
  });

  signUpUser.save()
    .then(data => {
      response.json(data);
    })
    .catch(error => {
      response.json(error);
    });
});

router.post('/login', async (request, response) => {
  const User = signUp;
  const user = await User.findOne({ username: request.body.data.username });
  const token = generateAccessToken({ username: request.body.data.username });

  if (user) {
    const validPassword = await bcrypt.compare(request.body.data.password, user.password);
    if (validPassword) {
      response.status(200).json({ message: "Valid password", token: token });
    } else {
      response.status(200).json({ message: "Invalid password" });
    }
  } else {
    response.status(401).json({ error: "User does not exist" });
  }
});

module.exports = router;