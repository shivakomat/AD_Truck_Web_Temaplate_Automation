var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('main');
});

router.get('/build/section-1', function(req, res) {
  res.render('cms');
});

router.get('/build/section-3', function(req, res) {
  res.render('section-3');
});


module.exports = router;
