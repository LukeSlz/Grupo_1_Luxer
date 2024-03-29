/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productsController = require('../controllers/productsAdmin');


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
    /*****  Create  *****/
router.get('/createProduct', productsController.viewFormCreate);

router.post('/createProduct', upload.single('imagesCreate'), productsController.createNew);

    /*****  Modify  *****/
// router.get('/modifyProduct/:id', productsController.viewFormModify)

/*****  Exports *****/
module.exports = router;