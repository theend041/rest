const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

//Import Body-Parser (Middlewares)
app.use(bodyParser.json());
app.use(cors());

//Import Routes
const postRoute = require('./routes/posts');

//Routerlerin cagrilmasi
app.use('/posts', postRoute);

//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
});

//Connect database

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected'));


//Listen server
app.listen(3000);