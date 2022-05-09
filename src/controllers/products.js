const products = require("../data/products.json")

module.exports = {
    index: (req,res)=>{
        res.render("./pages/products", { products });
    },
    indexCart: (req,res)=>{
        res.render("./pages/cart");
    }
    
}

