module.exports = (sequelize, Sequelize) => {
    const Rating = sequelize.define('Rating', {
        // Define los campos de Rating
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        puntuaciones: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      });
    return Rating;
  };