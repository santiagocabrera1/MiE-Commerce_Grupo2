module.exports = {
    index:(req,res)=>{
        res.render("./pages/products");
    },
    indexCart :(req,res)=>{
        res.render("./pages/cart");
    }
    
}