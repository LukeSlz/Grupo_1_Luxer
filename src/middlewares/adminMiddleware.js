const path = require('path');
const fs = require('fs');
const QueryString = require('qs');

let usersArchive = fs.readFileSync(path.join(__dirname, '../database/users.json'));
users = JSON.parse(usersArchive);

let isAdministrator = (req, res, next) => {
    if(req.session.user){
        let loggedUser = req.session.user;
        console.log('The user ' + loggedUser.name + ' ' + loggedUser.lastName + ' is accessing ' + req.url);
        if(loggedUser.category===9){
            console.log(loggedUser.name + ' is an Admin');
            next();
        }else{
            console.log(loggedUser.name + ' is NOT an Admin');
            res.redirect('/');
        }
    }else{
        res.redirect('/login');
    }
};

module.exports = isAdministrator