const {body} = require("express-validator");

module.exports = [
    body("email").notEmpty().withMessage("Debe completar este campo")
]