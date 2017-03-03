var Meetup = require("../models/meetup");

module.exports.create = function (req, res){

	var meetup = new Meetup(req.body);
	meetup.save(function (err, doc){
		if(err)
			res.send(err);

		console.log("Salvo com sucesso");
		console.log(JSON.stringify(doc));
		res.send(doc);
	});
}

module.exports.list = function (req, res){
	Meetup.find({}, function (err, docs){
		if(err)
			res.send(err);

		console.log(docs);
		res.send(docs);
	});
}