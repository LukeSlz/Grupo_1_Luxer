/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const createProdController = require('../controllers/product');

/*****  Multer  *****/
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname,'../../public/images/new-products'));
    },
    filename: (req, file, cb) =>{
        let imageName = Date.now() + path.extname(file.originalname);
        cb(null, imageName)
    }
})
const upload = multer({storage})

/*****  Routes  *****/
router.get('/createProduct', createProdController.viewForm);
router.post('/createProduct', upload.single('imagesCreate'),(req, res, next)=>{
    console.log('New product created');
    next();
}, createProdController.createNew);

/*****  Exports *****/
module.exports = router;