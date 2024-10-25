const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');


require('dotenv').config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log('MongoDB URL:', process.env.MONGO_URL)).catch((err) =>
{console.log("Error connecting", err.message)});
console.log('MongoDB URL:', process.env.MONGO_URI);
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log('Backend listening on port');
});
