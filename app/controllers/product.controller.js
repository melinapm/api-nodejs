const db = require("../models");
const Product = db.products;

// Create and Save a new Product
exports.create = (req, res) => {
   // Validate request
   if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
};

// Create a Tutorial
const tutorial = new Tutorial({
title: req.body.title,
description: req.body.description,
published: req.body.published ? req.body.published : false
});

// Save Tutorial in the database
tutorial
.save(tutorial)
.then(data => {
    res.send(data);
})
.catch(err => {
    res.status(500).send({
    message:
        err.message || "Some error occurred while creating the Tutorial."
    });
});

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Product with an id
exports.findOne = (req, res) => {
  
};

// Update a Product by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Products
exports.findAllPublished = (req, res) => {
  
};