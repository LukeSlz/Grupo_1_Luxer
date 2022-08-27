module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    const cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        category_id: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        profilePic: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    return User;
}