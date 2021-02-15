const express = require('express');
const db_shoppin_cart = require('../db');
const router = express.Router();

router.get('/', async (req,res,next)=>{
           // Website you wish to allow to connect
        //    res.setHeader('Access-Control-Allow-Origin', '*');

            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');


           // Request methods you wish to allow
           res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
       
           // Request headers you wish to allow
           res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
       
           // Set to true if you need the website to include cookies in the requests sent
           // to the API (e.g. in case you use sessions)
           res.setHeader('Access-Control-Allow-Credentials', true);

    try {
        let results = await db_shoppin_cart.all();
        res.json(results);
    } catch (e) {
        console.log(e)
        req.json(e)
    }
})

module.exports = router