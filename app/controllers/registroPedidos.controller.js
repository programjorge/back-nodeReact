const db = require("../models");
const registroPedidos = db.registroPedidos;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    registroPedidos.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

  exports.createPedido = async (req,res) => {
    try {
        await registroPedidos.create({
            pedido: req.body.pedido,
            userId: req.body.userId,
          })
          .then(data =>{
            return res.send(data);
          })
    } catch (error) {
      throw error
    }
  };