const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Admin = new Schema({
    userName:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
}
)
module.exports = mongoose.model('Admin',Admin);