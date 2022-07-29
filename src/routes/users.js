/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const usersController = require('../controllers/usersController')



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
router.get('/login', usersController.viewFormLogin);
router.get('/register', usersController.viewFormRegister);
router.get('/allUsers', usersController.viewAllUsers);
router.post("/register", upload.single("profile-pic"), usersController.create);

module.exports = router;