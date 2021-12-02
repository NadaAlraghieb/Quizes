const express = require("express");
const { Teams } = require("./db");



const getId = (req, res) => {
  
    const {id} = req.body;
    
    const foundId = users.find((elem) => {
      
      return elem.id == id;
    });
    
    if (foundId) res.send(foundId);
    else
      res
        .status(404)
        .send(
          "the id is not found"
        );
  };

module.exports={getId};