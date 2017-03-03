var mongoose = require("mongoose");
	Schema = mongoose.Schema;

	var MeetupSchema = new Schema({
	    name: { type:String, required:true, trim:true},
	    criado_em: {type:Date, default:Date.now}
	});

module.exports = mongoose.model('meetup', MeetupSchema);