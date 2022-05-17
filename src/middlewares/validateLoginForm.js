const { body} = require ('express-validator');

const validationsLogin = [
    body("email").notEmpty().withMessage("Este campo es obligatorio").bail().isEmail().trim().withMessage("Ingrese un email valido porfavor"),
    body ("password").notEmpty().withMessage("Este campo es obligatorio").trim(),
]

module.exports= validationsLogin;