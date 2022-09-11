/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const path = require('path');
const aboutUsController = require('../controllers/aboutUs')

/*****  Routes  *****/
router.get('/aboutUs', aboutUs.index);


module.exports = router;