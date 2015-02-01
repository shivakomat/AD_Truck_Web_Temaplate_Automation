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

cms.get('/get/section4',function(req,res) {
	var db = req.db;
	db.collection('section4').find().toArray(function (err,content){
		res.json(content);
	});
});

cms.get('/get/section6',function(req,res) {
	var db = req.db;
	db.collection('section6').find().toArray(function (err,content){
		res.json(content);
	});
});

cms.put('/set/section3',function(req,res){
	var db = req.db;
	var content = req.body;	
	db.collection('section3').update({key:"content"}, {$set:content},function(err,result) {
		res.send((result === 1) ? { msg: '' } : { msg: 'error:' + err });
	});	
});

cms.get('/set/section3/default',function(req,res){
	var db = req.db;
	var content = {
		title: "Section-3-Title",
		title_tag_line: "Section-3-Title-Tag-Line",
		header:"Section-3-Header",
		first_sub_title:"Section-3-First-Sub-Title",
		first_sub_content:"Section-3-First-Sub-Content",
		second_sub_title:"Section-3-Second-Sub-Title",
		second_sub_content:"Section-3-Second-Sub-Content"
	}
	db.collection('section3').update({key:"content"}, {$set:content},function(err,result) {
		if(!err) {
			console.log('section3 updated');
			res.send('updated');
		}
		res.send(err);
	});	
});

cms.put('/set/section6',function(req,res){
	var db = req.db;
	var content = req.body;	
	db.collection('section6').update({key:"content"}, {$set:content},function(err,result) {
		res.send((result === 1) ? { msg: '' } : { msg: 'error:' + err });
	});	
});

cms.get('/set/section6/default',function(req,res){
	var db = req.db;
	var content = { 
		title:"Title-About-Section",
		title_tag_line:"title-tag-line",
		first_paragraph:"Paragraph-1",
		second_paragraph:"Paragraph-2",
		third_paragraph:"Paragraph-3",
		fourth_paragraph:"Paragraph-4"
	}
	db.collection('section6').update({key:"content"}, {$set:content},function(err,result) {
		if(!err) {
			console.log('section6 updated');
			res.send('updated');
		}
		res.send(err);
	});	
});

module.exports = cms;