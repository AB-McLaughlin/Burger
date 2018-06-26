//link to express and router
//export route to be used by server.js
//bring in burgerlist which has database list of burgers available

const express = require('express');
const route = express.Router();
const burger = require('../models/burgers.js');

// Create all our routes and set up logic within those routes where required.
route.get("/", function(req, res) {
	burger.all(function(data){
		var burgerData = {
			burgers: data
		};
		console.log(burgerData);
		res.render('index', burgerData);
	})
});


//for connection to update burgers once been devoured
route.put('/burgers/update', function(req, res) {
	burger.update(req.body.burger_id, function(result) {
		console.log(result);
		res.redirect('/');
	});
});

route.post('/burgers/create', function(req, res) {
	burger.create(req.body.burger_name, function(result) {
		res.redirect('/');
	})
})

module.exports = route;



