/*****  Requires    *****/
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const {validationResult, body} = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize


module.exports = {
    viewFormLogin: (req, res) => {
        res.render('login');
    }, 
    
    login: (req, res) => {
        let resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()){
            res.render('login', {errors: resultValidation.mapped()})
        }else{
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                if(user != null){
                    let checkPass = bcrypt.compareSync(req.body.password, user.dataValues.password) 
                        if(checkPass === false) {
                            res.render('login', {errors: {invalid: {msg: 'Las credenciales son inválidas'}}});
                        }else{
                            req.session.user = user.dataValues;
                            if(req.body.remindme){
                                res.cookie('email', user.dataValues.email, {maxAge: 1000*60*60*2})
                                res.redirect('/');
                            }else{
                                res.redirect('/');
                            }
                        }
                }else{
                    res.render('login', {errors: {noUser: {msg: "El usuario no existe"}}})
                }})
            .catch((e) => {
                console.log('Error', e);
            });
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
        db.User.findAll({
            include: ['user_category']
        })
        .then(users => {
            res.render('allUsers', {users})
        })
        .catch(e => console.log(e))
    },
    viewUserDetails: (req, res) => {
        db.User.findByPk(req.params.id, {
            include: ['user_category']
        })
        .then(user => {
            res.render('userDetails', {user})
        })
    },

    viewFormRegister: (req, res) => {
        res.render('register');
    },

    create: (req, res) => {
        let resultValidation = validationResult(req);
        if(!resultValidation.isEmpty()){
            res.render('register', {errors: resultValidation.mapped()})
        }else{
            db.User.create({
                    name: req.body.name,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    category_id: 1,
                    profilePic:  req.file ? req.file.filename : 'foto-1659480597346.jpg',
            })
            .then(() =>{
                return res.redirect('login');
            });
        }
    },
    viewEdit: (req, res) =>{
        let userId = req.params.id;
        db.User.findByPk(userId, {include: ['user_category']})
            .then(userFound => {
                let user = userFound.dataValues;
                res.render('userEdit', {user})
            })
    },
    edit: (req, res) => {
        db.User.update({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            category_id: req.body.category_idOld,
            profilePic:  req.file ? req.file.filename : req.body.oldProfilePic,
        },{
            where: {id: req.params.id}
        })
        .then(() => {
            db.User.findByPk(req.params.id, {include: ['user_category']})
            .then(user => {
                req.session.user = user.dataValues;
                return res.redirect('/')
            })
        })
    }
}
