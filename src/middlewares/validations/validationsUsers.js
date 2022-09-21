const { body } = require('express-validator');

/*****  Express Validator *****/
module.exports = [
    body('email').notEmpty().isEmail().withMessage('Agregar un e-mail válido'),
    body('password').isLength({min: 8}).withMessage('La contraseña no cumple con los parámetros'),
]