const products = require("../data/products.json");
const model = require("../models/products");

module.exports = {
    index: (req,res)=>{
        const mostwanted = products.filter((product) => product.mostwanted === true)
        const destacados = products.slice(0, 4)
        
        res.render("./pages/index", { destacados, mostwanted: model.findAll()});
    }
    
}
