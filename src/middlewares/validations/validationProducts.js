const path = require('path');
const { body } = require('express-validator');
const db = require('../../database/models');
const sequelize = db.sequelize

module.exports = [
    body('nameCreate').notEmpty().isLength({min:5}).withMessage('Este campo debe contener por lo menos 5 caracteres'),
    body('descriptionCreate').notEmpty().isLength({min:20}).withMessage('Este campo debe contener por lo menos 20 caracteres'),
    body('imagesCreate').custom((value, {req}) => {
        value = req.file;
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            let fileExtension = path.extname(value.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivos permitidos son ${acceptedExtensions.join(', ')}`);
            }else{
                return value;
            };
    }),
    body('materialCreate').notEmpty().withMessage('Debe seleccionar el material'),
    body('categoryCreate').notEmpty().withMessage('Debe seleccionar la categoría'),
    body('priceCreate').notEmpty().withMessage('Debe colocar el precio del producto')
]