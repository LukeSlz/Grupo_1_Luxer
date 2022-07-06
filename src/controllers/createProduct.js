/*****  Requires    *****/
const path = require('path');
const fs = require('fs');
const { builtinModules } = require('module');

/*****  Controller Methods  *****/
const controllerCreateProduct = {
    viewForm: (req, res) => {
        res.render('createProduct');
    },
    createNew: (req, res) => {
        console.log('New product created');
        res.send('A new product was created')
    }
}

/*****  Export  *****/
module.exports = controllerCreateProduct;