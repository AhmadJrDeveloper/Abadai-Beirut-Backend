const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Prodcuts = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type:String
    },
    price:{
        type: Number,
        required: true
    },
    recommended:{
        type: Boolean,
        required: true
    }
}
)
module.exports = mongoose.model('Product',Prodcuts);