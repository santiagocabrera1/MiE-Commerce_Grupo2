const {validationResult} = require("express-validator")
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs")

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
            let users = JSON.parse(fs.readFileSync(path.join(__dirname ,"../data/users.json"), {encoding: "utf-8"}));
            
            let id = 0; 
            users.forEach(user => {
                    id = user.id > id ? user.id: id;
            })

            users.push({
                id,
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10)
            });

            fs.writeFileSync(path.join(__dirname ,"../data/users.json"), JSON.stringify(users));
            res.redirect("/login");

        }


    }

}