var express = require('express');
var mongoose = require('mongoose');
var ejs = require('ejs');
var layouts = require('express-ejs-layouts');
var bodyParser= require('body-parser');
var methodOverride= require('method-override');

var app = express();
mongoose.connect("mongodb://localhost/books");
mongoose.connect("mongodb://localhost/games");

var bookRoutes = require('./config/books-routes');
var gameRoutes = require('./config/games-routes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(layouts);

app.use(bookRoutes);
app.use(gameRoutes);

app.listen(process.env.PORT || 3000 , function(){
  console.log('app is listening on port 3000');
});
