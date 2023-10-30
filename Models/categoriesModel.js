const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Categories = new Schema(
    {
        name : 
        {
            type : String,
            require: true
        },

        image :
        {
            type : String
        },
        productId: {
            type:mongoose.Types.ObjectId, ref: 'Product',
        }
    }
)
module.exports = mongoose.model('Category', Categories)