const express = require('express');
const router = express.Router();
const controllers = require("../controller/controls")
const authController = require('../controller/authController');



router.post("/login", authController.verifyToken, controllers.login)
router.post("/signup", controllers.signup)


module.exports = router;