const express =require("express")
const teamRouter= express.Router();


const{getId}=require('./team');
const { Teams } = require("./db");

teamRouter.get('/:id',getId);



module.exports={teamRouter};