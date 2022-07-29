/*****  Requires    *****/
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

    /*****  Routers *****/
const productsAdminRouter = require('./routes/productsAdmin');
const productsDetailRouter = require('./routes/productsDetail');
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const shoppingCartRouter = require('./routes/shoppingCart');

/*****  Port    *****/
const port = 7000;

/*****  Middlewares *****/
app.use(express.static('public'));
app.use(methodOverride('_method'));

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

app.get('/userDetails', (req, res) => {
    res.render('userDetails.ejs')
})

/***** Port Run *****/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})