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
      if (resultValidation.errors.length>0){
        console.log(errors);
        res.send(errors)
        console.log(req.body);
      }else{
        let usersArchive = fs.readFileSync(path.join(__dirname, '../database/users.json'));
        users = JSON.parse(usersArchive);
        let loggedUser = users.find(usuario => usuario.Email === req.body.email);
        if(!loggedUser){
          res.render('login.ejs', {errors: {email: {msg: 'Las credenciales son invalidas'}}});
        }else{
          req.session.user = loggedUser;
          res.redirect('/');
        }
      }
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

