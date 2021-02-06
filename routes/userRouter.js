var express = require('express');
var router = express.Router();
const userController = require("../Controller/userController");

/* GET home page. */
router.get('/new', userController.new);

router.post('/signIn',userController.signIn)

module.exports = router;
