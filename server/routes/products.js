const express = require('express');
const db_shoppin_products = require('../db/products_query');
const  product_router = express.Router();

product_router.get('/', async (req,res,next)=>{


    try {
        let results = await db_shoppin_products.all();
        res.json(results);
    } catch (e) {
        console.log(e)
        req.json(e)
    }
})



product_router.post('/', async (req,res,next)=>{

    console.log('got it here',req.body)
  })
  
  
  

module.exports = product_router