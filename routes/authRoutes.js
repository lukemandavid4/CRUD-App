const express = require(`express`)
const router = require(`express`).Router()
const Product = require(`../models/productsSchema`)

router.get(`/`)
router.get(`/:id`)
router.post(`/`)
router.put(`/:id`)
router.delete(`/:id`)

module.exports = authRoutes