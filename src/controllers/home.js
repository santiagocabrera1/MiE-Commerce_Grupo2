const products = require("../data/products.json")

module.exports = {
    index: (req,res)=>{
        const mostwanted = products.data.filter((product) => product.mostwanted === true)
        const destacados = products.data.slice(0, 4)
        
        res.render("./pages/index", { destacados, mostwanted });
    }
    
}