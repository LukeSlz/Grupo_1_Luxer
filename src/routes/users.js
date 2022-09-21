/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const usersValidations = require('../middlewares/validations/validationsUsers');
const registerValidations = require('../middlewares/validations/validationsRegister');

const usersController = require('../controllers/usersController');
const guestMiddleware = require("../middlewares/guestMiddleware");
const adminMiddleware = require('../middlewares/adminMiddleware');

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
router.post("/register", upload.single("profilePic"), registerValidations, usersController.create);
  /*****  Log Out   *****/
router.get('/logout', guestMiddleware.isLogged, usersController.viewLogout);
router.post("/logout", guestMiddleware.isLogged, usersController.logout);
  /*****  View Users   *****/
router.get('/users', adminMiddleware.isAdministrator, usersController.viewAllUsers);
router.get('/users/:id', guestMiddleware.sameUser, usersController.viewUserDetails);
  /*****  Edit User   *****/
router.get('/users/edit/:id', guestMiddleware.isLogged, guestMiddleware.sameUser, usersController.viewEdit);
router.post('/users/edit/:id', usersValidations, upload.single("profilePic"), usersController.edit);




module.exports = router;