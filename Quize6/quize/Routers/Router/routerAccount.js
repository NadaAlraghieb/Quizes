// Create an account router that will receive all the requests coming to the path (/account)*/

const express =require("express")
const accountRouter= express.Router();


const{getAllAccount}=require('../controller/account');


accountRouter.get('/account',getAllAccount)



module.exports={getAllAccount};