/*****  Requires    *****/
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const db = require('../database/models');
const sequelize = db.sequelize


/*****  Controller Methods  *****/
module.exports = {
    viewFormCreate: (req, res) => {
        res.render('createProduct');
    },
    createNew: (req, res) => {
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
        .catch(error => res.send(error));
        },
        
    viewFormEdit: (req, res) => {
        db.Product.findByPk(req.params.id, {include: ['material', 'category']})
            .then(productFound => {
                let product = productFound.dataValues;
                res.render('editProduct', {product})
            })
            .catch(error => res.send(error));
    },
    edit: (req, res) => {
        db.Product.update({
            name: req.body.nameModify,
            description: req.body.descriptionModify,
            images: req.file.filename,
            material_id: req.body.materialModify,
            category_id: req.body.categoryModify,
            price: req.body.priceModify
        },{
            where: {id: req.params.id}
        })
        .then(() => {
            return res.redirect('/products');
        })
        .catch(error => res.send(error));
    },
    viewDelete: (req, res) => {
        db.Product.findByPk(req.params.id, {include: ['material', 'category']})
            .then(productFound => {
                let theProduct = productFound.dataValues;
                res.render('deleteProduct', {theProduct});
            })
            .catch(error => res.send(error));
    },
    delete: (req, res) => {
        db.Product.destroy({where: {id: req.params.id}})
            .then(() => {
                res.redirect('/products');
            })
            .catch(error => res.send(error));
    }
}