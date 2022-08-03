/*****  Requires    *****/
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');

module.exports = {
    viewFormLogin: (req, res) => {
        res.render('login');
    },
    
    login: (req, res) => {
      let resultValidation = validationResult(req);
      if (!resultValidation.isEmpty()){
        console.log(resultValidation);
        res.render('login', {errors: resultValidation.mapped()})
        console.log(req.body);
      }else{
        let usersArchive = fs.readFileSync(path.join(__dirname, '../database/users.json'));
        users = JSON.parse(usersArchive);
        let loggedUser = users.find(usuario => usuario.email === req.body.email);
        if(loggedUser){
          bcrypt.compare(req.body.password, loggedUser.password)
          .then((result) => {
            if(result==false){
              res.render('login', {errors: {invalid: {msg: 'Las credenciales son inválidas'}}});
            }else{
              req.session.user = loggedUser;
              res.cookie('email', loggedUser.email, {maxAge: 1000*60*60*2})
              res.redirect('/');
            }
          })
          .catch((e) => {
            console.log('Error');
          });
        }else{
          res.render('login', {errors: {noUser: {msg: "El usuario no existe"}}})
        }
      }
    },
    
    logout: (req, res) => {
      req.session.destroy();
      res.clearCookie("email")
      res.redirect('/')
    },
    
    viewAllUsers: (req,res) => {
        res.render('allUsers');
    },

    viewFormRegister: (req, res) => {
      res.render('register');
  },
  
    create: (req, res) => {
      let usersArchive = fs.readFileSync(path.join(__dirname, '../database/users.json'));
      users = JSON.parse(usersArchive);

      let lastUser;
      if(users.length > 0){
      lastUser = users.pop();
      users.push(lastUser)

      let user = {
        id: lastUser? lastUser.id + 1: 1,
        name: req.body.name,
        lastName: req.body.surname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        category: 1,
        profilePic:  req.file ? req.file.filename : '',
      };
      users.push(user);
      let usersJSON = JSON.stringify(users);
      fs.writeFileSync(path.join(__dirname, '../database/users.json'), usersJSON);
      res.redirect('/')
      }
  
} 

}