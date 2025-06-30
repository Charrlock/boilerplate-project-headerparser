// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

/** main API endpoint of this project
 * should respond to "/api/whoami"
 * should respond with:
 *  ipaddress: "172.70.115.147"
 *  language: "pl,en-US;q=0.7,en;q=0.3"
 *  software: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:139.0) Gecko/20100101 Firefox/139.0"
 *  */ 
app.get('/api/whoami', function(req, res) {
  // get ip
  const incomingIP = req.ip;

  // get language
  const incomingLanguage = req.headers['accept-language'];

  // get software
  const incomingSoftware = req.headers['user-agent'];

  res.json({ipaddress: incomingIP, language: incomingLanguage, software: incomingSoftware})
})


// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
