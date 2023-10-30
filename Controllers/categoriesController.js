const Category = require('../Models/categoriesModel')
const mongoose = require('mongoose')

// Get all categories
const getCategories = async (req, res) => 
{
    const categories = await Category.find({})
    res.status(200).json(categories)
} 


//Get a single category
const getCategory = async (req, res) => 
{
    try{
    const { id } = req.params 
    const category = await Category.findById(id)
    res.status(200).json(category)
    }
    catch(error){
        res.status(404).json({mssg: 'no such category'})
    }
}



// Create a new category
const createCategory = async (req, res) => 
{
    const {name} = req.body

    try {
        const image = req.file ? req.file.path:'';
    const category = await Category.create({name, image})
    res.status(200).json(category)
    } catch (error) {
    res.status(400).json({error: error.message})
    }
}

// Delete a category
const deleteCategory = async (req,res) => 
{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such category'})

    }
    const category = await Category.findOneAndDelete({_id: id})
    if(!category) {
        return res.status(404).json({error: 'No such category'})
    }
    res.status(200).json(category)
}

//update category
const updateCategory = async (req,res) => {
    const { id } = req.params
    const image = req.file ? req.file.path:'';

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such category'})
    }
    const category = await Category.findByIdAndUpdate({_id: id}, {...req.body,image})

    if(!category) {
        res.status(404).json(category)
    }    
    res.status(200).json(category)
    }




module.exports = {createCategory, getCategory, getCategories, deleteCategory, updateCategory}