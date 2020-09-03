"use strict";
require('dotenv').config();
const express = require('express');
const endpoints = require('./endpoints');

const app = express();

try{
    endpoints(app);

}catch(e){
    console.error(e);
    process.exit();
}


app.listen(3000);
