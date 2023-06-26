module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("Products", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DOUBLE
      },
      image:{
        type: Sequelize.STRING
      },
      description :{
        type: Sequelize.TEXT
      }
    });
    return Products;
  };