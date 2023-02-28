const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define("sales_products", {
    saleId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    productId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    },
    { 
      timestamps: false,
      underscored: true,
      tableName: 'sales_products',
    }
  );
  
  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      foreignKey: 'saleId',
      as: 'sale',
      through: SalesProducts,
      otherKey: 'productId',
    });
    models.Product.belongsToMany(models.Sale, {
      foreignKey: 'productId',
      as: 'product',
      through: SalesProducts,
      otherKey: 'saleId',
    });
  };
  
  return SalesProducts;
}
  
module.exports = SalesProducts; 