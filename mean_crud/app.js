var express = require("express");
	app = express();
	mongoose = require("mongoose");
	bodyParser = require("body-parser");
	controller = require("./controller/router");

mongoose.connect('localhost:27017/end_to_end', function(err){
	mongoose.Promise = global.Promise;
	if(err){
		console.log('Erro de conexão:'+err);
	}
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.render("index");
});

// REST API
app.get("/api/meetups", controller.list);
app.post("/api/meetups", controller.create);


app.listen(3000);
console.log("EndToEnd connected at 3000 door");