const path = require('path');

module.exports = {
    index: (req, res) => {
        res.render('home')
    },
    conocenos: (req, res) => {
        res.render('aboutUs')
    }
}