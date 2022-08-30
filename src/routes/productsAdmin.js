/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productsAdminController = require('../controllers/productsAdmin');
const productsAdminMiddleware = require('../middlewares/productsAdmin');
const isAdminMiddleware = require("../middlewares/adminMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");

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
router.get('/products/create', guestMiddleware.isLogged, isAdminMiddleware.isAdministrator, productsAdminController.viewFormCreate);
router.post('/products/create', upload.single('imagesCreate'), isAdminMiddleware.isAdministrator, productsAdminMiddleware.createdItem, productsAdminController.createNew);

    /*****  Modify  *****/
router.get('/products/edit/:id', guestMiddleware.isLogged, isAdminMiddleware.isAdministrator, productsAdminController.viewFormEdit);
router.put('/products/edit/:id', upload.single('imagesModify'), isAdminMiddleware.isAdministrator, productsAdminMiddleware.editedItem, productsAdminController.edit);

    /*****  Delete  *****/
router.get('/products/delete/:id', guestMiddleware.isLogged, isAdminMiddleware.isAdministrator, productsAdminController.viewDelete);
router.delete('/products/delete/:id', isAdminMiddleware.isAdministrator, productsAdminMiddleware.deletedItem, productsAdminController.delete)
/*****  Exports *****/
module.exports = router;