const products = require("../data/products.json")

module.exports = {
    index: (req,res)=>{
        res.render("./pages/products", { products });
    },
    indexCart: (req,res)=>{
        res.render("./pages/cart");
    },
    detail: (req,res) => {
        const {id} = req.params; 
        const product = products.data.find(p => p.id === Number(id));
        const relacionados = products.data.slice(0,4) 
        console.log(product, id);


        if (product) {
            res.render("./pages/product-detail", {product, relacionados})
        } else {        
            res.redirect("/not-found");
        }
        
    }
    
}

