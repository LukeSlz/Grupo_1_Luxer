const { body } = require('express-validator');

/*****  Express Validator *****/
module.exports = [
    body('email').isEmail().withMessage('Agregar un e-mail válido'),
    body('password').isLength({min: 5}).withMessage('Contraseña de minimo 5 caracteres'),
]