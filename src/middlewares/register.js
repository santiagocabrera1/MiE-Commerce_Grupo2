const {body} = require("express-validator");

module.exports = [
    body("email").notEmpty().withMessage("Debe completar el email").isEmail().withMessage("El formato debe ser Email").bail(),
    body("firstname").notEmpty().withMessage("Debe completar el nombre").bail(),
    body("lastname").notEmpty().withMessage("Debe completar el apellido").bail(),
    body("password").notEmpty().withMessage("Debe escribir una contraseña").bail()
    .isLength({min: 8}).withMessage('Debe tener al menos 8 caracteres').bail()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).withMessage('Deberá tener letras mayúsculas, minúsculas, un número y un carácter especial')
]