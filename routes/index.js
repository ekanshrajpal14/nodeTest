var express = require('express');
var router = express.Router();
var userModel = require("./users");


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/create', function (req, res, next) {
  res.render('sign');
});



router.post('/create', function (req, res, next) {
  var cr = {
    username:req.body.username,
    password:req.body.password,
  }
  userModel.create(cr).then(function(de){
    res.json(de);
  })
});


router.get('/info', function (req, res, next) {
  userModel.find().then(function(de){
    res.json(de);
  })
});





module.exports = router;
