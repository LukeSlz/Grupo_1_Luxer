const path = require('path');
const { body } = require('express-validator');
const db = require('../../database/models');
const sequelize = db.sequelize

module.exports = [
    body('name').notEmpty().isLength({min:2}).withMessage('Este campo debe contener por lo menos 2 caracteres'),
    body('lastName').notEmpty().isLength({min:2}).withMessage('Este campo debe contener por lo menos 2 caracteres'),
    body('email').notEmpty().isEmail().withMessage('Este campo debe contener un email válido').custom(value => {
        return db.User.findOne({
            where: {
                email: value
            }
        }).then((result) => {
            if(result!= null){
                return Promise.reject('Email already registered');
            }
        })
    }),
    body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).withMessage('La contraseña debe contener minimo 8 caracteres entre: Mayus, minus, caracter especial'),
    body('repassword').custom((value, {req, loc, path}) => {
        if (value !== req.body.password){
            throw new Error('Las contraseñas no coinciden')
        }else{
            return value;
        };
    }),
    body('profilePic').optional().custom((value, {req}) => {
        if(req.file){
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivos permitidos son ${acceptedExtensions.join(', ')}`);
            }
        }
    }),
]