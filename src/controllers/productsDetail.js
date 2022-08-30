/*****  Requires    *****/
const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize

/*****  Controller Methods  *****/
module.exports = {
    viewAll: (req, res) => {
        db.Product.findAll({
            include: ['material', 'category']
        })
            .then(products => {
                res.render('allProducts', {products});
            })
    },
    viewDetail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: ['material', 'category']
        })
            .then(productFound => {
                let product = productFound.dataValues;
                res.render('productsDetails', {product})
            })
    }
}