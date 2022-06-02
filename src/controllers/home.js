
const model = require("../models/products");

module.exports = {
    index: async (req,res)=>{
        const products = await model.findAll()
        const destacados = products.slice(0, 4)
        const mostwanted = await model.findMostwanted()
        console.log(req.session);
        res.render("./pages/index", { destacados, mostwanted: mostwanted.slice(0, 8), user: req.session.userLogged });
    }
    
}
