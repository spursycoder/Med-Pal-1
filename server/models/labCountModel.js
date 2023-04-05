const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const labCountSchema = new Schema(
	{
		testName: {
			type: String,
			required: true,
		},
		count: {
			type: Number,
			required: true,
		},
		dateTaken: {
			type: Date,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("LabCount", labCountSchema);
