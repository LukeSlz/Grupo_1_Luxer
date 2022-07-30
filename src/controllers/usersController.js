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
        let loggedUserPass = (loggedUser.password===req.body.password)?true:false;
        console.log(loggedUser);
        if(!loggedUser  || loggedUserPass==false){
          res.render('login', {errors: {invalid: {msg: 'Las credenciales son inválidas'}}});
        }else{
          req.session.user = loggedUser;
          if(req.body.remindMe){
            res.cookie('email', loggedUser.email, {maxAge: 1000*60*60*24})
          }
          res.redirect('/');
        }
      }
    },
    logout: (req, res) => {
      req.session.destroy();
      res.cookie('email',null,{maxAge: -1});
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
        Nombre: req.body.name,
        Apellido: req.body.surname,
        Email: req.body.email,
        Contraseña: bcrypt.hashSync(req.body.password, 10),
        Categoria: 1,
        Imagen:  req.file ? req.file.filename : '',
      };
    users.push(user);
    let usersJSON = JSON.stringify(users);
    fs.writeFileSync(path.join(__dirname, '../database/users.json'), usersJSON);
    res.redirect('/')
    }
  
} 

}

