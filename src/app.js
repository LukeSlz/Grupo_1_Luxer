const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static('pages'));


app.get('/', (req, res) => {
    res.render('home')
})
app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.get('/productsDetails', (req, res) => {
    res.render('productsDetails.ejs')
})
app.get('/register', (req, res) => {
    res.render('register.ejs')
})
app.get('/shoppingCart', (req, res) => {
    res.render('shoppingCart.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})