var express = require('express');
var router = express.Router();

var bookController = require('../controllers/book-controller.js');

// add routes here
router.route("/")
  .get(bookController.index)
  .post(bookController.create);

// New
router.route("/new")
  .get(bookController.new);

router.route("/:id")
  .get(bookController.show)
  .put(bookController.update)
  .delete(bookController.delete);

// Edit
router.route("/:id/edit")
  .get(bookController.edit);

module.exports = router;