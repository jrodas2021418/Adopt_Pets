`use strict`

const mongoose= require('mongoose')
const Schema = mongoose.Schema;

const comentarioSchema = Schema({
    comentario:{
        type: String,
        require: true
    },
    fecha:{
        type: Date,
        require: true, 
        default: Date.now

    },
    
})

module.exports = mongoose.model("Comentario", comentarioSchema)
