const { check} = require ('express-validator');

const validationsLogin = [
    check("email")
    .notEmpty().withMessage("Este campo es obligatorio").bail().isEmail().trim().withMessage("Ingrese un email valido porfavor"),
    check ("password")
    .notEmpty().withMessage("Este campo es obligatorio").trim(),
]

module.exports= validationsLogin;