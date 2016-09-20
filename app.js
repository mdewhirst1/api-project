var express = require('express');
var ejs = require('ejs');
var layouts = require('express-ejs-layouts');
var app = express();

var bookRoutes = require('./config/books-routes');

app.set('view engine', 'ejs');

app.use(layouts);

app.use(bookRoutes);

app.listen(3000 , function(){
  console.log('app is listening on port 3000');
});