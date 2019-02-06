var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var na = req.query.name;
	var des = req.query.description;
	res.render("add",{
		'name' : na,
		'description' : des,
		"imageURL": "http://lorempixel.com/400/400/people"
	});
 }