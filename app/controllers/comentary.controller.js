const db = require("../models");
const Comentary = db.comentary;
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
