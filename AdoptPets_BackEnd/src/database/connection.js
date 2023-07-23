'use strict'

require('dotenv').config();
const database = process.env.DATABASE
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connection = async()=>{
    try{
        await mongoose.connect(database);
        console.log('Conectado a la base de datos')

    }catch(error){
        throw new Error ("Error al iniciar la base de datos");
    }
};

module.exports = {
    connection,
}