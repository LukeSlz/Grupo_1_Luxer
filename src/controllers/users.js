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


const path = require('path');
const fs = require('fs');
const multer = require('multer');


const usersController = {
    
    create: (req, res) => {
      let errors = validationResult(req); 
      if (errors.isEmpty()) {            
        let user = {
          nombre: req.body.first_name,
          apellido: req.body.last_name,
          email: req.body.email,
          password: req.body.password,
          avatar:  req.file ? req.file.filename : '',
          
        }
        let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../database/users.json'), {
          encoding: 'utf-8'
        });
        let users;
        if (archivoUsers == "") {
          users = [];
        } else {
          users = JSON.parse(archivoUsers);
        };
  
        users.push(user);
        usersJSON = JSON.stringify(users, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../database/users.json'), usersJSON);
        res.redirect('/login');
      } else {

        return res.render(path.resolve(__dirname, '../views/register'), {
          errors: errors.errors,  old: req.body
        });
      }
    }
}

module.exports = usersController;



