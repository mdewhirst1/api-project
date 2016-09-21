var mongoose = require('mongoose');

var BookSchema= mongoose.Schema({
  title: String,
  body: String
});

module.exports= mongoose.model('Book', BookSchema);
