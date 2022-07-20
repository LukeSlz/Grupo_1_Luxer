const path = require('path');

module.exports = {
    viewFormLogin: (req, res) => {
        res.render('login');
    },
    viewFormRegister: (req, res) => {
        res.render('register');
    },
    viewAllUsers: (req,res) => {
        res.render('allUsers');
    }
}