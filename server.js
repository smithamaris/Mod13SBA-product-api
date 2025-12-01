const express = require('express');
const morgan = require('morgan')
require('dotenv').config();
const {connectDB} = require('./db/connection')
const productRoutes = require('./routes/productRoutes')

const PORT = 4000 || process.env.PORT;


connectDB()
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));

app.use('/api/product', productRoutes)


app.listen(PORT, () => {
    console.log(`Server successfully running at port: ${PORT}`);
    
});

