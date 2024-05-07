const express = require(`express`)
const router = express.Router()
const Product = require(`../models/productsSchema`)
const { getProduct, getProductOne, postProduct, updateProduct, deleteProduct } = require("../controllers/authController")


router.get(`/`, getProduct)
router.get(`/:id`, getProductOne)
router.post(`/`, postProduct)
router.put(`/:id`, updateProduct)
router.delete(`/:id`, deleteProduct)

module.exports = router