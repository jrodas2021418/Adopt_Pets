'use strict'

const express = require("express")
const app =express();
const {connection}=require("./src/database/connection");
require('dotenv').config();
const port = process.env.PORT;
const Mascota = require('./src/routes/mascotas.routes');

connection();

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use('/api', Mascota);

app.listen(port, () =>{
    console.log(`El servidor esta corriendo el puerto ${port}`);
});
