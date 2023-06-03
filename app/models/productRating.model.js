const rating = require("./Rating.model");
const product = require("./products.model");

module.exports = (sequelize, Sequelize) => {
    const ProductRating = sequelize.define('ProductRating', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
        ProductId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique:false,
          references: {
            model: product,
            key: 'id',
            unique:false,
          },
        },
        RatingId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique:false,
          references: {
            model: rating,
            key: 'id',
            unique:false,
          },
        },
      });
    return ProductRating;
  };