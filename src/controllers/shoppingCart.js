const path = require('path');

module.exports = {
    index: (req, res) => {
        res.render('shoppingCart')
    },
    purchased: (req, res) => {
        res.render('purchased')
    }
}