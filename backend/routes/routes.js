const express = require('express');
const router = express.Router();
const signUp = require('../models/signup.model');

router.post('/signup', (request, response) => {
  const signUpUser = new signUp({
    username: request.body.data.username,
    email: request.body.data.email,
    password: request.body.data.password
  });

  signUpUser.save()
    .then(data => {
      response.json(data);
    })
    .catch(error => {
      response.json(error);
    });
});

module.exports = router;