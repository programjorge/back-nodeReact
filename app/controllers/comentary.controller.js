const db = require("../models");
const Comentary = db.comentary;
const Products = db.product
const Op = db.Sequelize.Op;

exports.getComentaries = (req, res) => {
  const productId = req.params.productId;

  Comentary.findAll({
    where: {
      productId: productId
    }
  })
    .then(data => {
      if (data) {
        return res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find comentary with productId=${productId}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving comentary with productId=" + productId
      });
    });
};

exports.createComentary = async (req,res) => {
  try {
    // Verifica si el producto existe antes de crear el comentario
    console.log(req.body)
    const product = await Products.findByPk(req.body.productId);
    if (!product) {
      console.log(`El producto con el ID ${req.body.productId} no existe.`);
      return;
    }

    // Crea el comentario y asocia el producto
    await Comentary.create({
      description: req.body.description,
      productId: req.body.productId,
    })
    .then(data =>{
      return res.send(data);
    })
    console.log('Comentario creado:');
  } catch (error) {
    throw error
  }
};
