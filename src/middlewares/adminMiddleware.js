const path = require('path');
const fs = require('fs');

let usersArchive = fs.readFileSync(path.join(__dirname, '../database/users.json'));
users = JSON.parse(usersArchive);

module.exports = {
    isAdministrator: (req, res, next) => {
        if(req.session.user){
            let loggedUser = req.session.user;
            if(loggedUser.category_id==9){
                next();
            }else{
                res.redirect('/');
            }
        }else{
            res.redirect('/login');
        }
    }
} 

