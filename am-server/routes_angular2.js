//module.exports = function(app, mongoose) {
module.exports = function(app) {

	//var MapDataModel = require('./map-data.model')(mongoose);  //returns a function and sends our mongoose info?

	//return MapDataModel;

	app.get("/download", function(req, res) {
		console.log('starting file download');

		var file = __dirname + '/userData/walter_bg/soil_info/spatial/soilmu_a_aoi.json';
		res.download(file); // Set disposition and send it.
			
	});


/*	app.get('/download', function(req, res) {
		console.log('starting file download');
		var file = _dirname + '/userData/walter_bg/2016/soil_info/spatial/soilmu_a_aoi.json';
		
		var filename = path.basename(file);
		var mimetype = mime.lookup(file);

		res.setHeader('Content-disposition', 'attachment; filename=' + filename);
		res.setHeader('Content-type', mimetype);

		var filestream = fs.createReadStream(file);
		filestream.pipe(res);
		console.log('ending file download');

		// function(err){
		// 	if (err) {
		// 		res.status(500);
		// 		res.send("Error getting all line items");
		// 		return;
		// 	}
		res.send("success");
		//}
	});
	*/
};