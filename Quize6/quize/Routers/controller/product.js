const express = require("express");

const getAllProduct = (req, res) => {
    res.send(product);
  };

  app.post("/add", (req, res) => {
    const {nameProduct,price} = req.body;
  
    const addProduct = new product({
        nameProduct,
        price,
    });
    addProduct
    .save()
    .then((resp) => {
      res.status(201).json(resp);
    })
    .catch((err) => {
      console.log(err);
      res.json(err.message);
    });
});


module.exports = {getAllProduct}