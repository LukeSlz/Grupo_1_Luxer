/*****  Requires    *****/
const express = require('express');
const app = express();
const path = require('path');
    /*****  Routers *****/
const productsRouter = require('./routes/products');
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const shoppingCartRouter = require('./routes/shoppingCart');

/*****  Port    *****/
const port = 7000;

/*****  Middlewares *****/
app.use(express.static('public'));

/*****  EJS - Template Engine   *****/
app.set('view engine', 'ejs');
app.set('views', './src/views');

/*****  Route System    *****/
    /*****  Home    *****/
app.use(homeRouter);
    /*****  Users   *****/
app.use(usersRouter);
    /*****  Shopping Cart   *****/
app.use(shoppingCartRouter);
    /*****  Products (Create, Modify)   *****/
app.use(productsRouter);

app.get('/productsDetails', (req, res) => {
    res.render('productsDetails.ejs')
})
app.get('/allProducts', (req, res) => {
    res.render('allProducts.ejs')
})


/***** Port Run *****/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})