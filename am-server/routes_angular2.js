//module.exports = function(app, mongoose) {
module.exports = function(app, upload) {

	//var MapDataModel = require('./map-data.model')(mongoose);  //returns a function and sends our mongoose info?

	//return MapDataModel;

	app.get("/download", function(req, res) {
		console.log('starting file download_mike');
		var file = __dirname + '/userData/salz_m/soil_info/spatial/soilmu_a_aoi.json';
		res.download(file); // Set disposition and send it.
			
	});

	app.get("/download1", function(req, res) {
		console.log('starting file download_brian');
		var file = __dirname + '/userData/walter_bg/soil_info/spatial/soilmu_a_aoi.json';
		res.download(file); // Set disposition and send it.
			
	});

	app.get("/download2", function(req, res) {
		console.log('starting file download_glen');
		var file = __dirname + '/userData/walter_gm/spatial/soilmu_a_aoi.json';
		res.download(file); // Set disposition and send it.
			
	});

	app.get("/shapefile", function(req, res){
	console.log("creating a geoJSON");
	shp("../userData/salz_m/soil_info/spatial/soilmu_a_aoi").then(function(geojson){
        var geoJSONfn = "../userData/salz_m/soil_info/spatial/soilmu_a_aoi.json";
        fs.writeFile(geoJSONfn, JSON.stringify(geojson), function(err){
        	if (err){
        		res.send("error didn't write file");
        	} else {
        		res.send("created a geoJSON file");
        		console.log("a geoJSON file should have been created.");
        	}
        });
    }, function(err){
    	console.log(err);
    	res.send("err");
    });
});

	app.post("/upload", upload.single('shpFile'), function(req, res){ 
		console.log("uploading a file");
		console.log(req.files);
		console.log(req.body);
		// req.file is the `avatar` file
  	// req.body will hold the text fields, if there were any

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