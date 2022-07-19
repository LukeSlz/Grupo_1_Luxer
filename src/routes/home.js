/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const path = require('path');
const homeController = require('../controllers/home')

/*****  Routes  *****/
router.get('/', homeController.index);

module.exports = router;