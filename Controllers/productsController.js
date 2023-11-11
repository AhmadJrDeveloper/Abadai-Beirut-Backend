const Products = require('../Models/productsModel');

const mongoose = require('mongoose');


// view all products
const getProducts = async (req, res) =>{
    try{
        const products = await Products.find({});
        res.status(200).json(products)
    }
    catch(err){
        res.status(400).json({error: err.message});
    }

}

// Get Products by Category ID

const getProductsByCategory = async (req, res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: "No such Category"})

    }
    const product = (await Products.find({categoryId:id})
    .populate({
        path:'categoryId',
        select:"name"}));
    if(!product)
    {
        return res.status(404).json({error: "Not Found"})
    }
    res.status(200).json(product)

}

// View single product

const viewProduct = async (req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: "No such product"})

    }
    const product = await Products.findById(id);

    if(!product)
    {
        return res.status(404).json({error: "Not Found"})
    }
    res.status(200).json(product)
}


    



// to add a product
const addProduct = async (req, res) =>{
    const {name, description, price, recommended,categoryId} = req.body;
    const image = req.file ? req.file.path:'';
    try{
        const products = await Products.create({name, description, image, price,recommended,categoryId})
        res.status(200).json(products)
        
        
    }
    catch(err){
        res.status(400).json({error: err.message});

    }
}

// Edit a product
const editProduct = async (req, res) =>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"no such workout"})
    }
    
    const image = req.file ? req.file.path:null;
    var product;

    if(image){
         product = await Products.findOneAndUpdate({_id:id},
            {
                ...req.body,
                    image
            },{
                new: true,
                // upsert: true // Make this update into an upsert
              })
    }
    else{
         product = await Products.findOneAndUpdate({_id:id},
            {
                ...req.body,
            },{
                new: true,
                // upsert: true // Make this update into an upsert
              })
    }

        if(!product)
        {
            return res.status(404).json({error: 'Not Found'})
        }
        res.status(200).json(product)

}


// Delete A Product
const deleteProduct = async (req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"this product doesn't exist"})
    }
    const product = await Products.findOneAndDelete({_id:id})

    if(!product)
    {
        return res.status(404).json({error:"Not Found"})
    }
    res.status(200).json(product)
}


// get all bestsellers

const getBestsellers = async (req, res) =>{
    const recommended = await Products.find({'recommended': {$ne : false}});
    if(!recommended)
    {
        return res.status(404).json({error: "Not Found"})
    }
    res.status(200).json(recommended)
}




module.exports = {getProducts, addProduct, deleteProduct, viewProduct, editProduct,getProductsByCategory,getBestsellers};