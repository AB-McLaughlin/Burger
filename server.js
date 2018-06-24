const express = require('express');
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');
//const methodOverride = require('method-override');
const mysql = require('mysql');

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded( {
		extended: false
	}));
//app.use(methodOverride('_method'));
app.engine('handlebars', exhbs({
		defaultLayout: 'main'
	}));
app.set('view engine', 'handlebars');
var route = require('./controllers/burgers_controller.js');
app.use('/', route);

var port = process.env.PORT || 3000;
app.listen(port);
console.log('You are listening on port: ' + port);