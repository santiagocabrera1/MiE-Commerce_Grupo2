const express = require('express');
const cart = require('../data/cart.json');

const router = express.Router();

const controller = require("../controllers/products")

router.get('/', controller.indexCart);

router.get('/cart', function(req,res){
    res.json(cart);
})

router.post('/addProduct', function(req,res) {
    res.json(req.body);
})


module.exports = router;