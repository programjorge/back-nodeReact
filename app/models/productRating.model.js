module.exports = (sequelize, Sequelize) => {
    const ProductRating = sequelize.define('ProductRating', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
      });
    return ProductRating;
  };