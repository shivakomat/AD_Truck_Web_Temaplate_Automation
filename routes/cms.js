var express = require('express');
var cms = express.Router();


cms.get('/get/section1',function(req,res) {
	var db = req.db;
	db.collection('slider').find().toArray(function (err,content){
    	res.json(content);
    });
});

cms.get('/get/section3',function(req,res) {
	var db = req.db;
	db.collection('section3').find().toArray(function (err,content){
		res.json(content);
	});
});




module.exports = cms;
