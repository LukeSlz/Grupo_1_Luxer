module.exports = (sequelize, dataTypes) => {
    const alias = 'Material';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        material: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        tableName: 'materials',
        timestamps: false
    }
    const Material = sequelize.define(alias, cols, config);

    Material.associate = (models) => {
        Material.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'material_id'
        })
    }

    return Material;
}