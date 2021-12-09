// Create an account router that will receive all the requests coming to the path (/account)*/

const express =require("express")
const productRouter= express.Router();


const{getAllProduct,addProduct}=require('../controller/product');

productRouter.get('/products',getAllProduct);
productRouter.post('/add',addProduct);





module.exports={getAllProduct,addProduct};