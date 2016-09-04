var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var expressSession = require("express-session");
var cookieParser = require("cookie-parser");
var app = express();
var path = require('path');
var mime = require('mime');
var fs = require('fs');
var shp = require("./shapefile-js-gh-pages/lib/index.js");
var multer  = require('multer');  // used to upload a file to the server.
var upload = multer({ dest: 'uploads/' }); // https://github.com/expressjs/multer

//mongoose.connect("mongodb://localhost");


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cookieParser()); // needed before express Session

app.use(expressSession({
	secret: "asfasdfasdf",
	resave: false,
	saveUninitialized: false
}));

app.use(cors({
	credentials: true,
	origin: true 
}));

app.use(function(req, res, next) {
	console.log(req.url);
	//res.setHeader('Access-Control-Allow-Credentials', true);
	//res.setHeader('Access-Control-Allow-Origin', "http://localhost:8000");
	next();
});
//*********************************
//var appRoutes = require("./routes_login.js")(app, mongoose);
var appAngular2 = require("./routes_angular2.js")(app, upload);
//var appAngular2 = require("./routes_angular2.js")(appRoutes);


//*********************************
app.use(function(req, res, next) {
	res.status(404);
	res.send("no");
});

app.listen(8000, function() {
	console.log("yes: port 8000");
});


