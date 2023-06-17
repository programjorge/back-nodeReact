const db = require("../models");
const pedidos = db.Pedidos;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    pedidos.findAll()
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
        let totalProductos = req.body.NumeroProductos
      for(let i = 0; i<totalProductos; i++){
        await pedidos.create({
            ProductId: req.body.ProductId,
            userId: req.body.userId,
          })
          .then(data =>{
            return res.send(data);
          })
      }
    } catch (error) {
      throw error
    }
  };
  