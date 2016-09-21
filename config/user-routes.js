var express = require('express');
var router = express.Router();

var usersController = require('../controllers/user-controller');

router.route('/users')
	.post(usersController.create);

router.route('/users/new')
	.get(usersController.new);

module.exports = router;