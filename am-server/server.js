var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var expressSession = require("express-session");
var app = express();
var path = require('path');
var mime = require('mime');
var fs = require('fs');
//mongoose.connect("mongodb://localhost");

//var appRoutes = require("./routes_login.js")(app, mongoose);
var appAngular2 = require("./routes_angular2.js")(app);
//var appAngular2 = require("./routes_angular2.js")(appRoutes);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cors());

app.use(expressSession({
	secret: "asfasdfasdf",
	resave: false,
	saveUninitialized: false
}));

app.use(function(req, res, next) {
	console.log(req.url);
	next();
});
//*********************************


//*********************************
app.use(function(req, res, next) {
	res.status(404);
	res.send("no");
});

app.listen(8000, function() {
	console.log("yes: port 8000");
});


