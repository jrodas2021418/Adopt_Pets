'use strict'

const express = require("express")
const app =express();
const {connection}=require("./src/database/connection");
require('dotenv').config();
const port = process.env.PORT;


connection();

app.use(express.urlencoded({extended:false}))
app.use(express.json());


app.listen(port, () =>{
    console.log(`El servidor esta corriendo el puerto ${port}`);
});
