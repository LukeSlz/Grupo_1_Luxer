/*****  Requires    *****/
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const {validationResult} = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize


/*****  Controller Methods  *****/
module.exports = {
    viewFormCreate: (req, res) => {
        res.render('createProduct');
    },
    createNew: (req, res) => {
        let resultValidation = validationResult(req);
        if(!resultValidation.isEmpty()){
            res.render('createProduct', {errors: resultValidation.mapped()});
            console.log(req.body);
            console.log(resultValidation);
        }else{
            db.Product.create({
                name: req.body.nameCreate,
                description: req.body.descriptionCreate,
                images: req.file.filename,
                material_id: req.body.materialCreate,
                category_id: req.body.categoryCreate,
                price: req.body.priceCreate
            })
            .then(() => {
                res.redirect('/products')
            })
            .catch(error => console.log(error));
        }
    },
        
    viewFormEdit: (req, res) => {
        db.Product.findByPk(req.params.id, {include: ['material', 'category']})
            .then(productFound => {
                let product = productFound.dataValues;
                res.render('editProduct', {product})
            })
            .catch(error => console.log(error));
    },
    edit: (req, res) => {
        if(req.file){
            db.Product.findByPk(req.params.id, {
                include: ['material', 'category']
            })
            .then(productFound => {
                let image = `../../public/images/new-products/${productFound.dataValues.images}`
                fs.unlink(path.join(__dirname, image), (err)=>{console.log(err)});
            })
            .catch(e => console.log(e));
        };
        db.Product.update({
            name: req.body.nameModify,
            description: req.body.descriptionModify,
            images: req.file ? req.file.filename : req.body.oldImages,
            material_id: req.body.materialModify,
            category_id: req.body.categoryModify,
            price: req.body.priceModify
        },{
            where: {id: req.params.id}
        })
        .then(() => {
            return res.redirect('/products');
        })
        .catch(error => console.log(error));
    },
    viewDelete: (req, res) => {
        db.Product.findByPk(req.params.id, {include: ['material', 'category']})
            .then(productFound => {
                let theProduct = productFound.dataValues;
                res.render('deleteProduct', {theProduct});
            })
            .catch(error => console.log(error));
    },
    delete: (req, res) => {
/*         //This finds the item in the database and stores the information to delete the image file
        db.Product.findByPk(req.params.id, {
            include: ['material', 'category']
        })
        .then(productFound => {
            console.log(productFound);
            let image = `../../public/images/new-products/${productFound.dataValues.images}`
            fs.unlink(path.join(__dirname, image), (err)=>{console.log(err)});
        }) */
        //Then the .destroy is excecuted
        db.Product.destroy({where: {id: req.params.id}})
            .then(() => {
                res.redirect('/products');
            })
            .catch(error => console.log(error));
    }
}