/*****  Requires    *****/
const path = require('path');
const fs = require('fs');
const multer = require('multer');

/*****  Controller Methods  *****/
const productController = {
    viewFormCreate: (req, res) => {
        res.render('createProduct');
    },
    createNew: (req, res) => {
        let productsArchive = fs.readFileSync(path.join(__dirname, '../database/products.json'));
        let products;
        if(productsArchive == ''){
            products = [];
        }else{
            products = JSON.parse(productsArchive);
        };
        let lastProduct;
        if(products.length > 0){
                lastProduct = products.pop();
                products.push(lastProduct)
        };
        let newProduct = {
            id: lastProduct? lastProduct.id + 1: 1,
            name: req.body.nameCreate,
            description: req.body.descriptionCreate,
            images: req.file.filename,
            material: req.body.materialCreate,
            category: req.body.categoriesCreate,
            price: req.body.priceCreate
            };
        products.push(newProduct);
        let productsJSON = JSON.stringify(products);
        fs.writeFileSync(path.join(__dirname, '../database/products.json'), productsJSON);
        res.redirect('/')
        },
    viewFormModify: (req, res) => {
        let productsArchive = fs.readFileSync(path.join(__dirname, '../database/products.json'));
        products = JSON.parse(productsArchive);
        let myProduct;
        products.forEach( item => {
                if (item.id == req.params.id){
                        myProduct = item;
                }
        });
        res.render('modifyProduct', {myProduct})
    },
    modify: (req, res) => {
        let productsArchive = fs.readFileSync(path.join(__dirname, '../database/products.json'));
        products = JSON.parse(productsArchive);
        let modifiedProduct = {
            id: req.params.id,
            name: req.body.nameModify,
            description: req.body.descriptionModify,
            images: req.file.filename,
            material: req.body.materialModify,
            category: req.body.categoriesModify,
            price: req.body.priceModify
        };
        theProductIndex = products.findIndex(prod => prod.id == req.params.id);
        products.splice(theProductIndex, 1, modifiedProduct);
        let productsJSON = JSON.stringify(products);
        fs.writeFileSync(path.join(__dirname, '../database/products.json'), productsJSON);
        res.redirect('/');
        console.log('An item was modified');
    }
}

/*****  Export  *****/
module.exports = productController;