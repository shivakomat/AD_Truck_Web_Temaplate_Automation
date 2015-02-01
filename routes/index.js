var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('main');
});

router.get('/build/section1', function(req, res) {
  res.render('section-1');
});

router.get('/build/section3', function(req, res) {
  res.render('section-3');
});

router.get('/build/section6', function(req, res) {
  res.render('section-6');
});


module.exports = router;