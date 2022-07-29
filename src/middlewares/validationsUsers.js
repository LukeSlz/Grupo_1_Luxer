const { body } = require('express-validator');
const path = require('path');
const fs = require('fs');

/*****  Archivo usuarios  *****/
let usersArchive = fs.readFileSync(path.join(__dirname,'../database/users.json'));
let users = JSON.parse(usersArchive);

/*****  Express Validator *****/
module.exports = [
    body('email').isEmail().withMessage('Agregar un e-mail válido'),
    body('password').isLength({min: 5}).withMessage('Contraseña de minimo 5 caracteres'),
]