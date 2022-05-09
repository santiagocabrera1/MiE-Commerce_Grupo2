const products = require("../data/products.json");
const model = require("../models/products");

module.exports = {
    index:  (req,res)=>{
        console.log(model.findMostwanted());
        res.render("./pages/products", {products: model.findCategory("electronica")});
    },
    indexCart: (req,res)=>{
        res.render("./pages/cart");
    }
}

