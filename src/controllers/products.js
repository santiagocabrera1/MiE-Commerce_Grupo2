const model = require("../models/products");

module.exports = {
    index:  (req,res)=>{
        // console.log(model.findMostwanted());
        res.render("./pages/products", {products: model.findCategory("electronica")});
    },
    indexCart: (req,res)=>{
        res.render("./pages/cart");
    },
    detail: async(req,res) => {
        const {id} = req.params; 
        const product = await model.findOne(id);
        const products = await model.findAll();
        const relacionados = products.slice(0,4);
        if (product) {
            res.render("./pages/product-detail", {product, relacionados})
        } else {        
            res.redirect("/not-found");
        }
    }
}

