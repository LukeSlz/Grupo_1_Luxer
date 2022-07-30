/*****  Requires    *****/
const path = require('path');
const fs = require('fs');

/*****  Controller Methods  *****/
module.exports = {
    viewAll: (req, res) => {
        let productsArchive = fs.readFileSync(path.join(__dirname,'../database/products.json'));
        let products = JSON.parse(productsArchive);
        res.render('allProducts', {products});
    },
    viewDetail: (req, res) => {
        let productsArchive = fs.readFileSync(path.join(__dirname,'../database/products.json'));
        let products = JSON.parse(productsArchive);
        let theProductIndex = products.findIndex(prod => prod.id == req.params.id);
        let theProduct = products[theProductIndex];
        res.render('productsDetails', {theProduct});
    }
}