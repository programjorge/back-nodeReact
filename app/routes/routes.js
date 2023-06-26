module.exports = app => {
  const Users = require("../controllers/User.controller.js");
  const Products = require("../controllers/Products.controller.js");
  const Comentaries = require("../controllers/comentary.controller.js");
  const rating = require ("../controllers/productRating.controller.js"); 
  const pedidos = require("../controllers/pedidos.controller.js");
  const registroPedidos = require("../controllers/registroPedidos.controller.js");

  var router = require("express").Router();
  // Create a new User
  router.post("/", Users.create);

  // Retrieve all User
  router.get("/", Users.findAll);

  router.get("/products", Products.findAll);
  
  router.get("/products/:id", Products.findOne);

  router.get("/comentaries/:productId", Comentaries.getComentaries);

  router.post("/comentaries", Comentaries.createComentary);

  router.get("/ratings", rating.findAll);

  router.post("/ratings", rating.createRating);

  router.post("/pedidos", pedidos.createPedido);
  
  router.get("/pedidos", pedidos.findAll);

  router.post("/registro/pedidos", registroPedidos.createPedido);

  router.get("/registro/pedidos", registroPedidos.findAll);

  app.use('/api', router);
};
