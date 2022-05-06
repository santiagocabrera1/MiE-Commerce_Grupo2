const express = require('express');
const router = express.Router();
const controller = require("../controllers/users");

router.get('/', controller.indexRegister);
router.post('/', controller.register);

module.exports = router;