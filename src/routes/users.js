/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/users')

/*****  Routes  *****/
router.get('/login', usersController.viewFormLogin);
router.get('/register', usersController.viewFormRegister);
router.get('/allUsers', usersController.viewAllUsers);

module.exports = router;