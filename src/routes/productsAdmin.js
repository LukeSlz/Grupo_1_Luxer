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
router.get('/products/create', usersCRUDMiddleware.create, isAdminMiddleware, productsAdminController.viewFormCreate);
router.post('/products/create', upload.single('imagesCreate'), productsAdminMiddleware.createdItem, isAdminMiddleware, productsAdminController.createNew);

    /*****  Modify  *****/
router.get('/products/:id/edit', usersCRUDMiddleware.update, isAdminMiddleware, productsAdminController.viewFormEdit);
router.put('/products/:id/edit', upload.single('imagesModify'), productsAdminMiddleware.editedItem, isAdminMiddleware, productsAdminController.edit);

    /*****  Delete  *****/
router.get('/products/:id/delete', usersCRUDMiddleware.delete, isAdminMiddleware, productsAdminController.viewDelete);
router.delete('/products/:id/delete', productsAdminMiddleware.deletedItem, isAdminMiddleware, productsAdminController.delete)
/*****  Exports *****/
module.exports = router;