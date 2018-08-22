var express = require('express');
var app = express();

app.listen(25450 || process.env.PORT,function(){
    console.log("index.js up and running on port "+process.env.PORT);
});

app.post('/webhook', function (req, res) {
  res.end("index.js Post Hellow from webhook");
});

app.get('/webhook', function (req, res) {
  res.end("index.js Get Hellow from webhook");
});

