module.exports = (sequelize, Sequelize) => {
    const Comentary = sequelize.define("comentaries", {
      description: {
        type: Sequelize.STRING,
      }
    });
    return Comentary;
  };