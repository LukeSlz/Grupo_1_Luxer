/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const {body} = require('express-validator');

const usersController = require('../controllers/usersController');
const usersMiddleware = require('../middlewares/users');

/*****  Archivo usuarios  *****/
let usersArchive = fs.readFileSync(path.join(__dirname,'../database/users.json'));
let users = JSON.parse(usersArchive);

/*****  Multer *****/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/user-images'));    //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname));      
    }
  })
   
const upload= multer({ storage })

/*****  Express Validator *****/
const loginValidations = [
  body('email').isEmail().withMessage('Agregar un e-mail válido'),
  body('password').isLength({min: 5}).withMessage('Contraseña de minimo 5 caracteres'),
  body('email').custom( value => {
    for(let i=0; i<users.length;i++){
      if(users[i].Email == value){
        return true;
      }else{
        return false;
      };
    }
  }).withMessage('El email no se encuentra registrado'),
  body('password').custom((value, {req}) => {
    for(let i=0; i<users.length;i++){
      if(users[i].email == req.body.email){
        if(users[i].password == value){
          return true;
        }else{
          return false;
        }
      }
    }
  }).withMessage('Usuario o contraseña no coincide')
]

/*****  Routes  *****/
  /*****  Login   *****/
router.get('/login', usersController.viewFormLogin);
router.post('/login', loginValidations, usersController.login);
  /*****  Register   *****/
router.get('/register', usersController.viewFormRegister);
router.post("/register", upload.single("profile-pic"), usersController.create);
  /*****  View Users   *****/
router.get('/allUsers', usersController.viewAllUsers);

module.exports = router;