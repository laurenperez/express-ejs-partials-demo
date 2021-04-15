//Here is our first node app

var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');

// this tells your backend that there is a static front end to use.
app.use(express.static(path.join(__dirname,'views')));


app.get('/', function(req, res){
  // res.send('this string is being sent to the frontend from the backend');
  // res.send('index.html');
  res.render('index', {name: 'lauren'});
});


app.get('/greet/:name/:lastname', function(req, res){
  res.send('Hello ' + req.params.name + " " + req.params.lastname);
});


app.get('/multiply/:x/:y', function(req, res){
  var product = parseInt(req.params.x) * parseInt(req.params.y);
  res.send(product.toString());
});


app.listen(3000);
















//this pulls the node package into your app it imports express
//this is javascript, node is a language- it is javascript for the backend. 
//express is a framework for your app

//this is using an express function to use the express liprary
// the same way you use the $ to pull in the jquery library

//a get method takes a funtion
//it has two or three parameters a request and a response

//while we are developing localy we can just put 3000 in there for the port
//tells your browser where to look for the backend
//this is where you put your information when you are ready to deploy
