const express = require('express');
const db_shoppin_cart = require('../db');
const router = express.Router();

router.get('/', async (req,res,next)=>{


    try {
        let results = await db_shoppin_cart.all();
        res.json(results);
    } catch (e) {
        console.log(e)
        req.json(e)
    }
})

module.exports = router