const express = require('express');
const router = express.Router();
const controller = require("../controllers/users");
const validLogin = require("../middlewares/validateLoginForm")

router.get('/', controller.indexLogin);
router.post('/', [validLogin],controller.loginProccess);

module.exports = router;