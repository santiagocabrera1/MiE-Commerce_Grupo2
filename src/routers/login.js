const express = require('express');
const router = express.Router();
const controller = require("../controllers/users");

router.get('/', controller.indexLogin);

module.exports = router;