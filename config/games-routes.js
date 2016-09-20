var express = require('express');
var router = express.Router();

var gameController = require('../controllers/game-controller.js');

// add routes here
router.route("/games")
  .get(gameController.index)
  .post(gameController.create);

// New
router.route("/games/new")
  .get(gameController.new);

router.route("/games/:id")
  .get(gameController.show)
  .put(gameController.update)
  .delete(gameController.delete);

// Edit
router.route("/games/:id/edit")
  .get(gameController.edit);

module.exports = router;
