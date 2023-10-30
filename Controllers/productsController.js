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

// get by category id
const viewByCategory = async (req, res) =>{

    const {category} = req.body
    try{
        // Query the data base to find an admin with the same username and password
        const match = await Products.findOne(category);

        if(match){
            // admin with the provided username and password found
            res.status(200).json(match);
        }else{
            // No admin with matching credetials found
            res.status(400).json({error:'access forbidden'})
        }


    } 
    catch(error) {
        // Handle any database query errors here
        res.status(500).json({error:'Internal server error'});
    }

    

}


// to add a product
const addProduct = async (req, res) =>{
    const {name, description, image, price, recommended} = req.body;
    try{
        const products = await Products.create({name, description, image, price,recommended})
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

    const product = await Products.findOneAndUpdate({_id:id},
        {
            ...req.body
        })

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

const searchProduct = async (req, res) => {
    const search = req.query.search||"";
    const products = await Products.find(
        {name:{$regex:search,$options:"i"}}
        
    )
    res.status(200).json(products)
}



// upload image




module.exports = {getProducts, addProduct, deleteProduct, viewProduct, editProduct, viewByCategory, searchProduct};