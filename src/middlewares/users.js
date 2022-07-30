const path = require('path');
const fs = require('fs');

let usersArchive = fs.readFileSync(path.join(__dirname, '../database/users.json'));
users = JSON.parse(usersArchive);

module.exports = {
    access: (req, res, next) => {
        res.locals.user = false;
        if(req.session.user){
            res.locals.user = req.session.user;
            next();
        }else{
            next();
        }
    }
}