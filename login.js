var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var express = require('express');
var app = express();




app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Route handler that sends the response
app.get('/login/:username/:password', function(req, res){
			MongoClient.connect(url, function(err, db) {
			  if (err) throw err;
			  var query={ name: req.params.username , password: req.params.password };
			  console.log(query);
			  var dbo = db.db("mydb");
			  dbo.collection("users").find(query, { _id: 0, name: 1, password: 1 }).toArray(function(err, result) {
					if (err) throw err;
					if(result.length===0)
					data={"value":false}
					else
					data={"value":true}
				    res.send(data);
					db.close();
				  });
				});

  
});


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/signup',function(req, res){
	var user=false;
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var query={ name: req.body.username};
		console.log(query);
		var dbo = db.db("mydb");
		dbo.collection("users").find(query, { _id: 0, name: 1, password: 1 }).toArray(function(err, result) {
			if (err) throw err;
			if(result.length===0){
					MongoClient.connect(url, function(err, db) {
						if (err) throw err;
						var dbo = db.db("mydb");
						var myobj = { name: req.body.username, password: req.body.password ,mobile: req.body.mobile};
						console.log(myobj);
						dbo.collection("users").insertOne(myobj, function(err, response) {
						if (err) throw err;
						if(response.insertedCount===1)
							data={"value":true}
						else
							data={"value":false}
								res.send(data);
								db.close();
							});
						});		
			}
			else{
				data={"value":false}
				res.send(data);
			}
			db.close();
		});
	});
});


app.post('/forgot',function(req, res){
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var query={ name: req.body.username, mobile: req.body.mobile};
		console.log(query);
		var dbo = db.db("mydb");
		dbo.collection("users").find(query, { password: 1 }).toArray(function(err, result) {
			if (err) throw err;
			if(result.length===1){
				data={"value":true}
			}
			else
				data={"value":false}
			res.send(data);
			db.close();
		});
	});
});


app.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
          next();
    });
app.put('/change-password', function (req, res) {
				MongoClient.connect(url, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("mydb");
			  var myquery = { name : req.body.username };
			  var newvalues = { $set: {name: req.body.username, password: req.body.password } };
			  dbo.collection("users").updateMany(myquery, newvalues, function(err, response) {
				if (err) throw err;
				if(response.result.nModified===1){
					data={"value":true}
				}
				else
					data={"value":false}
				res.send(data)
				db.close();
			  });
			});
}); 
app.listen(3000);


//https://2factor.in/API/V1/2f57b21e-8f00-11e8-a895-0200cd936042/SMS/9598483483/154045