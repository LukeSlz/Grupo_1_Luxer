/*****  Requires    *****/
const path = require('path');
const fs = require('fs');
const multer = require('multer');

/*****  Controller Methods  *****/
        /*****  Create a new product Controler   *****/
const productController = {
    viewFormCreate: (req, res) => {
        res.render('createProduct');
    },
//------------- Method para la creacion de nuevos productos. Se accedera por POST --------
    createNew: (req, res) => {
        //Definimos una variable donde almacenaremos el archivo JSON que corresponde a la lista de produtos.
        let productsArchive = fs.readFileSync(path.join(__dirname, '../database/products.json'));
        //Definimos una variable donde almacenaremos los productos (ya no como JSON sino como array).
        let products;
        //Si el JSON estaba vacio, la variable anterior sera un array vacio. Si no, sera el JSON parseado.
        if(productsArchive == ''){
            products = [];
        }else{
            products = JSON.parse(productsArchive);
        };
        //Definimos un objeto cuyos atributos seran los que tome del body del request (con los name de cada campo del form).
                //Guardamos el ultimo item en una variable para poder conocer su id, ya que el siguiente item sera ese id + 1.
        let lastProduct;
        if(products.length > 0){
                lastProduct = products.pop();
                products.push(lastProduct)
        };
        let newProduct = {
            id: lastProduct? lastProduct.id + 1: 1,
            name: req.body.nameCreate,
            description: req.body.descriptionCreate,
            images: req.file.filename,
            material: req.body.materialCreate,
            categories: req.body.categoriesCreate,
            price: req.body.priceCreate,
            };
        //Pusheamos el nuevo producto dentro del array que contiene todos los productos.
        products.push(newProduct);
        //Guardamos el nuevo array modificado en formato JSON con JSON.stringify.
        let productsJSON = JSON.stringify(products);
        //Sobreescribimos el archivo JSON anterior.
        fs.writeFileSync(path.join(__dirname, '../database/products.json'), productsJSON);
        //Redirigimos el usuario al home.
        res.redirect('/')
        },
    viewFormModify: (req, res) => {
        let productsArchive = fs.readFileSync(path.join(__dirname, '../database/products.json'));
        products = JSON.parse(productsArchive);
        let myProduct;
        products.forEach( item => {
                if (item.id == req.params.id){
                        myProduct = item;
                }
        });
        res.render('modifyProduct', {myProduct})
    }
}

/*****  Export  *****/
module.exports = productController;