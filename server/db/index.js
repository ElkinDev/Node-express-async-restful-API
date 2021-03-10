const mysql = require('mysql');

const pool= mysql.createPool({
    connectionLimit:10,
    password:'c916a28a',
    user:'b2f93118ebe8ee',
    database:'heroku_05414d9e7523f00',
    host:'us-cdbr-east-03.cleardb.com',
    port:'3306',
})
const datetime = new Date().toISOString();

let db_shoppin_cart={};

db_shoppin_cart.all = () => {

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


db_shoppin_cart.create_cart = (data,iduser) => {

    return new Promise((resolve,reject) => {
        pool.query(`INSERT INTO cart (,sessinId,token,status,name,lastName,mobile,email,line1,address,optional_address,city,country,createdAt,updatedAt,content) VALUES ('${iduser}' , '', '', 1, '${data.name}', '${data.lastname}', '${data.phone}',
               '${data.emailAddress}', '${data.phone}', '${data.address}', '${data.optional_address}', '${data.city}', '${data.state}', '${datetime}', '','')`,(err, results)=>{
            if (err){
                return reject ({err:true,data:err})
            }else{
                return resolve ({err:false,data:results,newuser_id:iduser})

            }
        })
    })

}

db_shoppin_cart.insert_user=(data)=>{
    let data_p=data
    return new Promise ((resolve, reject )=>{
        pool.query(`INSERT INTO user (name,lastName,Mobile,email,passwordHash,admin,seller,registeredAt,lastLogin,intro,profile,account_created) VALUES ('${data_p.name}', '${data_p.lastname}', '${data_p.phone}', '${data_p.emailAddress}', '', 0, 0, '${datetime}','${datetime}', '', '', '${data_p.create_account}')`,(err, results)=>{
            if (err){
                return reject ({err:true,data:results})
            }else{
                return resolve ({err:false,data:results})
            }
        })
    })
}

db_shoppin_cart.insert_cart_details = () => {

    return new Promise((resolve,reject) => {
        pool.query(`INSERT INTO shopping_cart.cart_item (productId, cartId, price, quantity, createdAt, updatedAt) VALUES ('2', '2', '2', '2', '2', '2')`,(err, results)=>{
            if (err){
                return reject (err)
            }else{
                return resolve(results)
            }
        })
    })
}



module.exports = db_shoppin_cart;