const express = require('express');
const router = express.Router();
const controller = require("../controllers/users");
const validation = require("../middlewares/register")

router.get('/', controller.indexRegister);
router.post('/', [validation], controller.register);

module.exports = router;