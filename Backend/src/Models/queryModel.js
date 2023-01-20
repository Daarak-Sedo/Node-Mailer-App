const { express } = require('express');
const mongoose = require('mongoose')

const querySchema= new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    Mobile:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    
}, {timestamps: true})

module.exports = mongoose.model("query" , querySchema);
