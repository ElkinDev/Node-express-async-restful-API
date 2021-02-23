const express = require('express');
const router = express.Router();
const db_shoppin_cart = require('../db');

router.post('/', async (req,res,next)=>{



  let products_in_cart=req.body.products

  try {
    let results_user = await db_shoppin_cart.insert_user(req.body);
    if(results_user.data.insertId){
      let result_ = await db_shoppin_cart.create_cart(req.body,results_user.data.insertId);
      
        res.json({
          err:false,
          data:result_.data,
          newuser_:results_user.data.insertId

        });
        

    }else{

      res.json({
        err:true,
        data:null,
        msg:'error creating the user please try again'
      });

    }



  } catch (e) {
    console.log(e)
    res.json(e)
  }
})





module.exports = router