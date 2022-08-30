const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize

let usersArchive = fs.readFileSync(path.join(__dirname, '../database/users.json'));
users = JSON.parse(usersArchive);

function userLogin (req,res,next){
    res.locals.logged = false
        const email = req.cookies.email;
        if (!req.session.user){
            if (email){
                db.User.findOne({
                    where: {email: email}
                }).then(user => {
                    delete user.dataValues.password
                    req.session.user = user.dataValues;
                    res.locals.logged = true
                    res.locals.user = req.session.user
                })
            } 
        } else {
            res.locals.logged = true
            res.locals.user = req.session.user
        }
    

    next();

}

module.exports = userLogin
