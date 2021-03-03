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

module.exports = product_router