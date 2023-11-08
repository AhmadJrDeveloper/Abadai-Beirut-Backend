
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Inbox = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    status:{
        type:Boolean,
        default:false
    },
    message:{
        type:String,
        required:true
    }
    

   

})
module.exports = mongoose.model('Inbox',Inbox);
