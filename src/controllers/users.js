const {validationResult} = require("express-validator")
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs")


module.exports = {
    indexRegister: (req,res)=>{
        res.render("./pages/register", {errors: {}, oldData: {}});
    },

    indexLogin : (req,res)=>{
        res.render("./pages/login", {errors: {}, oldData: {}});
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


    },
    loginProccess: (req,res) => {
        let error = validationResult(req);
        if(!error.isEmpty()){
            return res.render("./pages/login", { 
                errors: error.mapped(),
                oldData: req.body
            })
        }  else {
            const userToLogin = JSON.parse( fs.readFileSync(path.resolve(__dirname, "../data/users.json"))).find(user => user.email == req.body.email);
            if(userToLogin && bcrypt.compareSync( req.body.password , userToLogin.password)){
                delete userToLogin.password;
                console.log(userToLogin);
                req.session.userLogged =  userToLogin;
                res.cookie("user", userToLogin,{maxAge: 60 * 1000 * 60});
                return res.redirect("/")
            } else {
                let errors = {
                    password:{
                        msg:'Contraseña incorrecta'
                    }
                }
                if (!userToLogin) {
                    errors.email = {
                        msg: "El usuario no existe"
                    }
                }
                return res.render("./pages/login", {
                    errors,
                    oldData: req.body
                })
            }
        }
    }

}