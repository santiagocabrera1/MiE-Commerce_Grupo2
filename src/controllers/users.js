const {validationResult} = require("express-validator")

module.exports = {
    indexRegister: (req,res)=>{
        res.render("./pages/register", {errors: {}, oldData: {}});
    },

    indexLogin : (req,res)=>{
        res.render("./pages/login");
    },

    register:(req,res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.render("./pages/register", {errors : errors.mapped(), oldData: req.body});
        } else {

        }


    }

    
}