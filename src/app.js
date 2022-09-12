/*****  Requires    *****/
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

    /*****  Middlewares     *****/
const usersMiddleware = require('./middlewares/userLogin')


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
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'topSecret',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(usersMiddleware);

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
    /*****  Products Admin (Create, Modify)   *****/
app.use(productsAdminRouter);
    /*****  Products (General)   *****/
app.use(productsDetailRouter);



/***** Port Run *****/
app.listen(port, () => {
    console.log(` -------------------------------------`)
    console.log(`|Luxer Studio is running on port ${port}|`)
    console.log(` -------------------------------------`)
})