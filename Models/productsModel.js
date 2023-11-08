const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Category = require('../Models/categoriesModel')
const Products = new Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        description:
        {
            type: String,
            required: true
        },

        image:
        {
            type:String
           
        },
        price:
        {
            type:Number,
            required: true
        },
        categoryId:
        {
            type: mongoose.Types.ObjectId, ref: 'Category',

            required: true
        },
        recommended:
        {
            type:Boolean ,
            default: false
          
        
        }

    })

    
module.exports = mongoose.model('Product', Products)
