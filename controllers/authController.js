const Product = require(`../models/productsSchema`)
const router = require(`../routes/authRoutes`)

const getProduct = async (req, res) =>{
  try {
    res.status(200).send(`Welcome to my Node API`)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
}

const getProductOne = async (req, res) =>{
  try {
    const {id} = req.params
    const product = await Product.findById(id)
    if(!product){
      res.status(404).send({message: "Product not found"})
    }
    res.status(200).json(product)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
}

const postProduct = async (req, res) =>{
  try {
    const products = await Product.create(req.body)
    res.status(200).json(products)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
}

const updateProduct = async (req, res) =>{
  try {
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id, req.body)
    if(!product){
      res.status(404).send({message: "Product not found"})
    }
    res.status(200).json(product)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
}

const deleteProduct = async (req, res) =>{
  try {
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id, req.body)
    if(!product){
      res.status(404).send({message: "Product not found"})
    }
    res.status(200).json(product)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
}
module.exports = {getProduct, getProductOne, postProduct, updateProduct, deleteProduct}