const db = require("../models");
const ratingProduct = db.ProductRating;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {


    ratingProduct.findAll()
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
  exports.createRating = async (req,res) => {
    try {
      console.log(req.body)
      await ratingProduct.create({
        ProductId: req.body.ProductId,
        RatingId: req.body.RatingId,
      })
      .then(data =>{
        return res.send(data);
      })
    } catch (error) {
      throw error
    }
  };
  