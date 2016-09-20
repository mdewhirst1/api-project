var express = require('express');
var ejs = require('ejs');
var layouts = require('express-ejs-layouts');
var app = express();

var bodyParser = require('body-parser');

var bookRoutes = require('./config/books-routes');
var gameRoutes = require('./config/games-routes');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(layouts);

app.use(bookRoutes);
app.use(gameRoutes);

app.listen(process.env.PORT || 3000 , function(){
  console.log('app is listening on port 3000');
});
