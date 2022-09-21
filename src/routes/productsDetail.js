/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const path = require('path');
const productsDetailController = require('../controllers/productsDetail');

/*****  Routes  *****/
router.get('/products', productsDetailController.viewAll);
router.get('/products/:id', productsDetailController.viewDetail)
router.post('/products', productsDetailController.search)

module.exports = router;