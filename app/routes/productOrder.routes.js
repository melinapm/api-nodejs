module.exports = (app) => {
  const productOrders = require("../controllers/productOrder.controller.js");

  var router = require("express").Router();

  // Create a new ProductOrder
  router.post("/", productOrders.create);

  // Retrieve all ProductOrders
  router.get("/", productOrders.findAll);

  // Retrieve a single ProductOrder with id
  router.get("/:id", productOrders.findOne);

  // Update a ProductOrder with id
  router.put("/:id", productOrders.update);

  // Delete a ProductOrder with id
  router.delete("/:id", productOrders.delete);

  app.use("/api/productOrders", router);
};
