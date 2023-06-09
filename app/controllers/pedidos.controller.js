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
      console.log(req.body)
        await pedidos.create({
            ProductId: req.body.ProductId,
            UserId: req.body.userId,
          })
          .then(data =>{
            return res.send(data);
          })
    } catch (error) {
      throw error
    }
  };
  