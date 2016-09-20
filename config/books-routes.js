var express = require('express');
var router = express.Router();

var bookController = require('../controllers/book-controller.js');

// add routes here
router.route("/books")
  .get(bookController.index)
  .post(bookController.create);

// New
router.route("/books/new")
  .get(bookController.new);

router.route("/books/:id")
  .get(bookController.show)
  .put(bookController.update)
  .delete(bookController.delete);

// Edit
router.route("/books/:id/edit")
  .get(bookController.edit);

module.exports = router;