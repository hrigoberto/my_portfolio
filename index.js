var express = require('express');
// calls up express and tells the system it is a variable
var server = express();
// labels the express function as server
var bodyParser= require('body-parser');
// calls the bodyparser function from express

server.use(express.static(__dirname+'/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});
// server.get calls forth the / and inputs the function to request, response
server.get('/about', function(request, response){
  response.sendFile('public/html/about.html', {root: __dirname});
});

server.get('/contact', function(request, response){
  response.sendFile('public/html/contact.html', {root: __dirname});
});

server.post('/contact', function(request, response){
  response.json(request.body);
});

server.listen(8080);
