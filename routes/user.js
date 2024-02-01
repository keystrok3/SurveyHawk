/*
  File: user.js

  Description:
  This file defines the routes related to user creation and auth functionality 
  using the Express.js framework.

  Routes:
  - POST /register: Endpoint for user registration, handled by the 'register' 
    function from the user controller.

  Export:
  The router object, configured with the defined routes, is exported 
  for use in other parts of the application.
*/

const express = require('express');
const { register } = require('../controllers/user');

const router = express.Router();

router.route('/register').post(register);


module.exports = router;
