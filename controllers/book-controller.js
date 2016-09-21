var Book = require("../models/book");

// INDEX
function indexBook(req, res) {
  Book.find({}, function(err, books) {
    res.render("books/index", {
      title: "all the books",
      books: books
    });
  });
}

// SHOW
function showBook(req, res) {
  Book.findById(req.params.id, function(err, book) {
    if (!book) return res.status(404).send("Not Found");
    if (err) return res.status(500).message(err);
    res.render("books/show" , {
      title: "just one book",
      book: book
    });
  });
}

// CREATE
function createBook(req, res) {
  Book.create(req.body, function(err, book) {
    if (err) return res.status(500).message(err);
    res.status(200).redirect("/books");
  });
}

// NEW
function newBook(req, res) {
  res.render("books/new",{
    title: "new book"
  });
}

// UPDATE
function updateBook(req, res) {
  Book.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, post) {
    res.redirect("/books");
  });
}

// DELETE
function deleteBook(req, res) {
  Book.findByIdAndRemove(req.params.id, function(err) {
    res.redirect("/books");
  })
}

// EDIT
function editBook(req, res) {
  Book.findById(req.params.id , function(err, book) {
      if(!post) return res.status(404).send("Not found");
      if(err) return res.status(500).send(err);
      res.render("books/edit" , {
        title: "edit the book",
        book: book
      });
  });
}

module.exports = {
  index: indexBook,
  show: showBook,
  create: createBook,
  new: newBook,
  update: updateBook,
  delete: deleteBook,
  edit: editBook
};
