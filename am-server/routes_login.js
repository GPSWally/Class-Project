module.exports = function(app, mongoose){ 

	var UserModel = require("./user.model")(mongoose);

	app.post("/login", function(req, res){
		UserModel.findOne({
		        username: req.body.username,
		        password: req.body.password
		    }, function(err, data) {
		        if (err) {
		            res.status(500);
		            res.send("Error logging in");
		            return;
		        }
		        if (!data) {
		            res.send({
		                status: "error"
		            });
		        } else {
		            res.send({
		                status: "success",
		                userInfo: data
		            });
		        }
		    });
		});


	app.post("/signup", function(req, res) {
	    UserModel.findOne({
	        username: req.body.username
	    }, function(err, data) {
	        if (err) {
	            res.status(500);
	            res.send("Error checking username");
	            return;
	        }
	        if (data) {
	            res.send({
	                status: "error",
	                message: "Username already taken"
	            });
	        } else {
	            var userInfo = {
	                username: req.body.username,
	                password: req.body.password
	            };
	            var newUser = new UserModel(userInfo);
	            newUser.save(function(err) {
	                if (err) {
	                    res.status(500);
	                    res.send("Error creating user");
	                    return;
	                } 

	                res.send({
	                    status: "success",
	                    userInfo: userInfo
	                });
	            });
	        }
	    });
	});

};
