module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("Products", {
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DOUBLE
      },
      image:{
        type: Sequelize.STRING
      }
    });
    // Products.associate = models =>{
    //     Products.belongsTo(models.Category, { foreignKey: 'categoryId' });
    // }
    return Products;
  };