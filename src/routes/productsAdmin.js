/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productsAdminController = require('../controllers/productsAdmin');
const productsAdminMiddleware = require('../middlewares/productsAdmin');
const usersCRUDMiddleware = require("../middlewares/userCRUD");
const isAdminMiddleware = require("../middlewares/adminMiddleware");

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
router.get('/products/create', usersCRUDMiddleware.create, isAdminMiddleware.isAdministrator, productsAdminController.viewFormCreate);
router.post('/products/create', upload.single('imagesCreate'), productsAdminMiddleware.createdItem, isAdminMiddleware.isAdministrator, productsAdminController.createNew);

    /*****  Modify  *****/
router.get('/products/edit/:id', usersCRUDMiddleware.update, isAdminMiddleware.isAdministrator, productsAdminController.viewFormEdit);
router.put('/products/edit/:id', upload.single('imagesModify'), productsAdminMiddleware.editedItem, isAdminMiddleware.isAdministrator, productsAdminController.edit);

    /*****  Delete  *****/
router.get('/products/delete/:id', usersCRUDMiddleware.delete, isAdminMiddleware.isAdministrator, productsAdminController.viewDelete);
router.delete('/products/delete/:id', productsAdminMiddleware.deletedItem, isAdminMiddleware.isAdministrator, productsAdminController.delete)
/*****  Exports *****/
module.exports = router;