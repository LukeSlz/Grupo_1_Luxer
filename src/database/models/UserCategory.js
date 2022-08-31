module.exports = (sequelize, dataTypes) => {
    const alias = 'UserCategory';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        }
    };
    let config = {
        tableName: 'user_categories',
        timestamps: false
    }
    const UserCategory = sequelize.define(alias, cols, config);

    return UserCategory;
}