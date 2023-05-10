module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    userName: {
      type: Sequelize.STRING
    },
    Password: {
      type: Sequelize.STRING
    },
  });

  return User;
};
