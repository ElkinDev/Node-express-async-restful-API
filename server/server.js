const express= require('express');
const routes= require('./routes');
const product_router= require('./routes/products');
const cart= require('./routes/cart');

const cors = require('cors')

const app = express();


const bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(cors())



app.use('/api/v1.0/productlist',routes,(res)=>{

});


app.use('/api/v1.0/products',product_router,(res)=>{

});






app.use('/api/v1.0/order',cart,(res)=>{

});





app.listen(process.env.PORT || '3000', ()=>{
    console.log(`Server running on port : ${process.env.PORT || 3000}`);

    
    
})