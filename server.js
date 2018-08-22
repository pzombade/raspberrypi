var express = require('express');
var app = express();


app.post('/webhook', function (req, res) {
  res.end("server.js Post Hellow from webhook");
});

app.get('/webhook', function (req, res) {
  res.end("server.js Get Hellow from webhook");
});

var server = app.listen(5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  //console.log("Example app listening at http://%s:%s", host, port)

})