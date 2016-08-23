
module.exports = function(app, mongoose){

	var MapDataModel = require('./map-data.model')(mongoose);  //returns a function and sends our mongoose info?

	return MapDataModel;
};