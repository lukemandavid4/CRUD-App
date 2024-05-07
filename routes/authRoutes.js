const express = require(`express`)
const router = express.Router()
const Product = require(`../models/productsSchema`)
const { getProduct, getProductOne, postProduct, updateProduct } = require("../controllers/authController")


router.get(`/`, getProduct)
router.get(`/:id`, getProductOne)
router.post(`/`, postProduct)
router.put(`/:id`, updateProduct)
router.delete(`/:id`)

module.exports = router