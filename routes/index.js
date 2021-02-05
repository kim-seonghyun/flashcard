var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log("실행됨")
});

router.post('/users/create',function(req,res,next){
  console.log("실행됨");
})

module.exports = router;
