const db = require('../../database/models');
const sequelize = db.sequelize;

module.exports = {
    list: (req, res) => {
        db.User.findAll({
            include: ['user_category']
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