const db = require('../../database/models');
const sequelize = db.sequelize;

module.exports = {
    list: (req, res) => {
        db.User.findAll({
            include: ['user_category'],
            attributes : [
                "id" ,
                "name" ,
                "lastName",
                "email",
            ]
        })
        .then(users => {
            let response = {
                info: {
                    status: 200,
                    total: users.length,
                    url: 'api/users/list'
                },
                data: users
            }   
            res.json(response)
        })
        .catch(e => {
            let response = {
                info: {
                    status: 404,
                    url: 'api/users/list',
                    error: e
                }
            }
            res.json(response)
        })
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id, {
            include: ['user_category']
        })
        .then(user => {
            delete user.dataValues.password;
            delete user.dataValues.category_id;
            user.dataValues.linkProfilePic = `http://localhost:7000/images/user-images/${user.dataValues.profilePic}`

            let response = { 
                info: {
                    status: 200,
                    url: 'api/users/detail/' + req.params.id
                },
                data: user
            }
            res.json(response)
        })
        .catch(e => {
            let response = {
                info: {
                    status: 404,
                    url: 'api/users/detail/' + req.params.id
                }
            }
            res.json(response)
        })
    }
}