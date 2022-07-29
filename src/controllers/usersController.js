/*****  Requires    *****/
const path = require('path');
const fs = require('fs');
const multer = require('multer');

module.exports = {
    viewFormLogin: (req, res) => {
        res.render('login');
    },
    
    viewAllUsers: (req,res) => {
        res.render('allUsers');
    },

    viewFormRegister: (req, res) => {
      res.render('register');
  },
  

    create: (req, res) => {
      let userArchive = fs.readFileSync(path.join(__dirname, '../database/users.json'));
      users = JSON.parse(usersArchive);

    let lastUser;
    if(users.length > 0){
    lastUser = users.pop();
    users.push(lastUsers)


      let user = {
        id: lastUser? lastUser.id + 1: 1,
        Nombre: req.body.name,
        Apellido: req.body.surname,
        Email: req.body.email,
        Contraseña: req.body.password,
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

