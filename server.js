var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.listen(port ,function(){
    console.log("up and running on port "+port);
});
//comment

app.post('/webhook', function (req, res) {
  res.end("server.js Post Hellow from webhook");
});

app.get('/webhook', function (req, res) {
  res.end("server.js Get Hellow from webhook");
});

app.get('/', function (req, res) {
	 console.log("Getting default content...");
  res.end("server.js Get default");
});
