const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usersRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/product');
const cartsRoute = require('./routes/cart');
const ordersRoute = require('./routes/order');


require('dotenv').config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB connected")).catch((err) =>
{console.log("Error connecting", err.message)});


app.use(express.json());
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productsRoute);
app.use('/api/carts', cartsRoute);
app.use('/api/orders', ordersRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log('Backend listening on port');
});
