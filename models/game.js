var mongoose = require('mongoose');

// Object Constructor
var GameSchema = mongoose.Schema({
	title: String,
	body: String
});

module.exports = mongoose.model('Game', GameSchema);