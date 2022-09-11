/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const path = require('path');
const shoppingCartController = require('../controllers/shoppingCart')


/*****  Routes  *****/
router.get('/shoppingCart', shoppingCartController.index);
router.get('/purchased', shoppingCartController.purchased);

module.exports = router;