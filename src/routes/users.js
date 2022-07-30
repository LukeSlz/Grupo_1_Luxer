/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const usersValidations = require('../middlewares/validationsUsers');

const usersController = require('../controllers/usersController');
const usersMiddleware = require('../middlewares/users');


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

/*****  Routes  *****/
  /*****  Login   *****/
router.get('/login', usersController.viewFormLogin);
router.post('/login', usersValidations, usersMiddleware.access, usersController.login);
  /*****  Register   *****/
router.get('/register', usersController.viewFormRegister);
router.post("/register", upload.single("profile-pic"), usersController.create);
  /*****  View Users   *****/
router.get('/allUsers', usersController.viewAllUsers);

module.exports = router;