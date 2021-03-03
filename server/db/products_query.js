const mysql = require('mysql');

const pool= mysql.createPool({
    connectionLimit:10,
    password:'c916a28a',
    user:'b2f93118ebe8ee',
    database:'heroku_05414d9e7523f00',
    host:'us-cdbr-east-03.cleardb.com',
    port:'3306',
})

let db_shoppin_products={};

db_shoppin_products.all = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM product`,(err, results)=>{
            if (err){
                return reject (err)
            }else{
                return resolve(results)
            }
        })

    })

}


db_shoppin_products.add = (data) => {

    return new Promise((resolve,reject) => {

        pool.query(`INSERT INTO product (title,metaTitle,slug,summary,price,quantity,createdAt,updatedAt,publishedAt,content,image_feature) VALUES ( '${data.userid}', '${data.metaTitle}', '${data.slug}', '${data.summary}', '${data.price}', '${data.quantity}', '${data.createdAt}', '${data.updatedAt}', '${data.publishedAt}', '${data.content}', '${data.image_feature}');
        `,(err, results)=>{
            if (err){
                return reject (err)
            }else{
                return resolve(results)
            }
        })

    })

}



db_shoppin_products.remove = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM product`,(err, results)=>{
            if (err){
                return reject (err)
            }else{
                return resolve(results)
            }
        })

    })

}


db_shoppin_products.update = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM product`,(err, results)=>{
            if (err){
                return reject (err)
            }else{
                return resolve(results)
            }
        })

    })

}

  



module.exports = db_shoppin_products;