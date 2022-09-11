/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const path = require('path');
const homeController = require('../controllers/home')

/*****  Routes  *****/
router.get('/', homeController.index);
router.get('/aboutUs', homeController.conocenos); /* Agregado con método "conocenos" para evitar el cannot Get */

module.exports = router;