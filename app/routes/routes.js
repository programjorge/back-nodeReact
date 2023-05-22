module.exports = app => {
  const Users = require("../controllers/User.controller.js");
  const Products = require("../controllers/Products.controller.js")

  var router = require("express").Router();
  // Create a new User
  router.post("/", Users.create);

  // Retrieve all User
  router.get("/", Users.findAll)

  router.get("/products", Products.findAll)
  
  router.get("/products/:id", Products.findOne)

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use('/api', router);
};
