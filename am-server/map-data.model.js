module.exports = function(mongoose) {

	var MapDataModel = mongoose.model("MapData", {
		grower: String,
		farm: String,
		field: String,
		fieldId: Number,
		cropType: String,
		cropYear: Number,
		month: Number,
		directory: String,
		fileName: String,
		fileId: Number,
		event: String,
		eventId: Number,
		notes: String,
		userId: Number
	});
	return MapDataModel;
};
