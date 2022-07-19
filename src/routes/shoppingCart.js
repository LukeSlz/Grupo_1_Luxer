/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const path = require('path');
const shoppingCartController = require('../controllers/shoppingCart')

/*****  Routes  *****/
router.get('/shoppingCart', shoppingCartController.index);

module.exports = router;