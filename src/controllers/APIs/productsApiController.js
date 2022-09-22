const db = require('../../database/models');
const sequelize = db.sequelize;

module.exports = {
    list: (req, res) => {
        db.Product.findAll({
            include: ['material', 'category']
        })
        .then(products => {
            let info = {
                status: 200,
                total: products.length,
                url: 'api/products'
            };
            info.countByMat1 = products.filter(x => x.material_id ==1).length;
            info.countByMat2 = products.filter(x => x.material_id ==2).length;
            info.countByMat3 = products.filter(x => x.material_id ==3).length;

            info.countByCat1 = products.filter(x => x.category_id ==1).length;
            info.countByCat2 = products.filter(x => x.category_id ==2).length;
            info.countByCat3 = products.filter(x => x.category_id ==3).length;
            info.countByCat4 = products.filter(x => x.category_id ==4).length;
            info.countByCat5 = products.filter(x => x.category_id ==5).length;

            let response = {
                info: info,
                data: products
            }
            res.json(response)
        })
        .catch(e => {
            console.log(e);
            let response = {
                info: {
                    status: 404,
                    url: 'api/products',
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
            delete user.dataValues.user_category;
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