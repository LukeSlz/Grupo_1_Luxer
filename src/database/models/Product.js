module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        images: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        material_id: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER(100),
            allowNull: false
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Material, {
            as: 'material',
            foreignKey: 'material_id'
        })
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })
        
    }

    return Product;
}