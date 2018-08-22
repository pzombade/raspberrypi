var express = require('express');
var app = express();

app.listen(3000 || process.env.PORT,function(){
    console.log("server.js up and running on port "+process.env.PORT);
});

app.post('/webhook', function (req, res) {
  res.end("server.js Post Hellow from webhook");
});

app.get('/webhook', function (req, res) {
  res.end("server.js Get Hellow from webhook");
});

