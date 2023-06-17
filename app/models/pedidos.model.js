module.exports = (sequelize, Sequelize) => {
    const Pedidos = sequelize.define('pedidos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
      });
    return Pedidos;
  };