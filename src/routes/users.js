/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const usersValidations = require('../middlewares/validationsUsers');

const usersController = require('../controllers/usersController');
const guestMiddleware = require("../middlewares/guestMiddleware")

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
router.get('/login', guestMiddleware.onlyForGuest, usersController.viewFormLogin);
router.post('/login', usersValidations, usersController.login);
  /*****  Register   *****/
router.get('/register', guestMiddleware.onlyForGuest , usersController.viewFormRegister);
router.post("/register", upload.single("profilePic"), usersController.create);
  /*****  Log Out   *****/
router.get('/logout', guestMiddleware.isLogged, usersController.viewLogout);
router.post("/logout", guestMiddleware.isLogged, usersController.logout);
  /*****  View Users   *****/
router.get('/users', usersController.viewAllUsers);
router.get('/users/:id', usersController.viewUserDetails);




module.exports = router;