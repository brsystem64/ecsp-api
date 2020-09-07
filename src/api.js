"use strict";
require('dotenv').config();
const express = require('express');
const endpoints = require('./endpoints');
const cors = require('cors');

const app = express();
app.use(cors());

try{
    endpoints(app);

}catch(e){
    console.error(e);
    process.exit();
}

app.listen(3001);
