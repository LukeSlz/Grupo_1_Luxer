//Archivo creado unicamente para hashear las passwords de la base de datos que se creo previamente

const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

let usersArchive = fs.readFileSync(path.join(__dirname, '../database/users.json'))
let users = JSON.parse(usersArchive);

let newUsers = users.map(user => {
    let oldPass = user.password;
    let newPass = bcrypt.hashSync(oldPass, 10);
    user.password = newPass;
    return user
})

let newUsersJson = JSON.stringify(newUsers);

fs.writeFileSync(path.join(__dirname, '../database/users.json'), newUsersJson);