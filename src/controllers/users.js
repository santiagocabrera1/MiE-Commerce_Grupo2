const {validationResult} = require("express-validator")

module.exports = {
    indexRegister: (req,res)=>{
        res.render("./pages/register");
    },

    indexLogin : (req,res)=>{
        res.render("./pages/login");
    },

    register:(req,res) =>{
        res.send(req.body);
        console.log(validationResult(req))
    }

}