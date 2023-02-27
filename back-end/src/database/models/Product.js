const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    url_image: {
      allowNull: false,
      type: DataTypes.STRING
    },
    },
    { 
      timestamps: false,
      tableName: 'products',
      underscored: true,
    }
  );

  return Product;
}
  
module.exports = Product; 