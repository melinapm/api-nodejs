const db = require("../models");
const ProductOrder = db.productOrders;

// Create and Save a new ProductOrder
exports.create = (req, res) => {
  // Validate request
  if (!req.body.idProduct || !req.body.idOrder) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a ProductOrder
  const productOrder = new ProductOrder({
    idProduct: req.body.idProduct,
    idOrder: req.body.idOrder,
    quantity: req.body.quantity,
  });

  // Save ProductOrder in the database
  productOrder
    .save(productOrder)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the productOrder.",
      });
    });
};

// Retrieve all ProductOrders from the database.
exports.findAll = (req, res) => {
  ProductOrder.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving productOrders.",
      });
    });
};

// Find a single ProductOrder with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ProductOrder.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found ProductOrder with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving ProductOrder with id=" + id });
    });
};

// Update a ProductOrder by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  ProductOrder.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update ProductOrder with id=${id}. Maybe ProductOrder was not found!`,
        });
      } else res.send({ message: "ProductOrder was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ProductOrder with id=" + id,
      });
    });
};

// Delete a ProductOrder with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  ProductOrder.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete ProductOrder with id=${id}. Maybe ProductOrder was not found!`,
        });
      } else {
        res.send({
          message: "ProductOrder was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete ProductOrder with id=" + id,
      });
    });
};

// Delete all ProductOrders from the database.
exports.deleteAll = (req, res) => {
  ProductOrder.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} ProductOrders were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all productOrders.",
      });
    });
};
