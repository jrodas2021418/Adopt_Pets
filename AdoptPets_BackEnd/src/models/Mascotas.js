'use strict'
 
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mascotasSchema = Schema({
    Raza: {
        type: String,
        required: true, 
    },
    Peso: {
        type: String,
        required: true,
    },
    Genero: {
        type: String,
        required: true,
    },
    Estado: {
        type: String,
        required: true,
        enum: ['En adopcion']
    },
    TipodeMascota: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('mascota', mascotasSchema)