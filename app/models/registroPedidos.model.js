module.exports = (sequelize, Sequelize) => {
    const registroPedidos = sequelize.define('registroPedidos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      pedido: {
        type: Sequelize.TEXT
      }
      });
    return registroPedidos;
  };