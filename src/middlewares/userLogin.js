const path = require('path');
const fs = require('fs');

let usersArchive = fs.readFileSync(path.join(__dirname, '../database/users.json'));
users = JSON.parse(usersArchive);

function userLogin (req,res,next){
    res.locals.logged = false
        const email = req.cookies.email;
        if (!req.session.user){
            if (email){
                let userLogged = users.find(user => email == user.email)
                delete userLogged.password
                req.session.user = userLogged
                res.locals.logged = true
                res.locals.user = req.session.user
            } 
        } else {
            res.locals.logged = true
            res.locals.user = req.session.user
        }
    

    next();

}

module.exports = userLogin
