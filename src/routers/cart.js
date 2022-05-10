const express = require('express');
const cart = require('../data/cart.json');

const router = express.Router();

const controller = require("../controllers/products");
const { redirect } = require('express/lib/response');

router.get('/', controller.indexCart);

// router.get('/cart', function(req,res){
//     res.json(cart);
// })


router.post('/addProduct', function(req,res) {
    const cart = fs.read.writeFileSync(path.join(__dirname, "../data/cart.json"));
        res.json(req.body);    
        res.json(req.body);
        redirect('/cart');
})


module.exports = router;