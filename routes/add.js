var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var na = req.query.name;
	var des = req.query.description;
	var newFriend = {
					'name':na,
					'description':des,
					'imageURL':'http://lorempixel.com/400/400/people'
				};
	data.friends.push(newFriend);
	console.log(data);
	res.render("index",data);
}