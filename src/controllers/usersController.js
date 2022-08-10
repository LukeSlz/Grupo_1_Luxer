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
              if(req.body.remindme){
                console.log('There is a reminder');
                res.cookie('email', loggedUser.email, {maxAge: 1000*60*60*2})
                res.redirect('/');
              }else{
                console.log('No reminder');
                res.redirect('/');
              }
            }
          })
          .catch((e) => {
            console.log('Error', e);
          });
        }else{
          res.render('login', {errors: {noUser: {msg: "El usuario no existe"}}})
        }
      }
    },
    
    viewLogout: (req, res) => {
      res.render('logout');
    },
    logout: (req, res) => {
      req.session.destroy();
      res.clearCookie("email")
      res.redirect('/')
    },
    
    viewAllUsers: (req,res) => {
        res.render('allUsers');
    },
    viewUserDetails: (req, res) => {
      let usersArchive = fs.readFileSync(path.join(__dirname, '../database/users.json'));
      let users = JSON.parse(usersArchive);
      let theUserIndex = users.findIndex(user => user.id == req.params.id);
      let theUser = users[theUserIndex];
      res.render('userDetails', {user: theUser});
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
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        category: 1,
        profilePic:  req.file ? req.file.filename : '',
      };
      users.push(user);
      let usersJSON = JSON.stringify(users);
      fs.writeFileSync(path.join(__dirname, '../database/users.json'), usersJSON);
      res.redirect('/login')
      }
  
} 

}