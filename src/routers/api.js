const express = require('express');

const router = express.Router();
const products = require("../data/products.json")

router.get('/products', (req, res) => {
    res.json(products)
});



module.exports = router;