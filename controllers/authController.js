const Product = require(``)

const getProduct = async (req, res) =>{
  try {
    const products = await Product.create(req.body)
  } catch (error) {
    
  }
}