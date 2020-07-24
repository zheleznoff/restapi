const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true,useNewUrlParser: true }, () => {    
    console.log('Connected');
});

//listening to the server
app.listen(3000);