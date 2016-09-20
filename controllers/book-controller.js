var books=[{
    id: 0,
    title: "Adventure land",
    body:  "This is an adventure book"
  },
  {
    id: 1,
    title: "Alice in wonderland",
    body:  "Chick fells down the hole"
  },
  {
    id: 2,
    title: "3 Little piggies",
    body:  "Book about three fat little piggies"
  },
  {
    id: 3,
    title: "Angels n Demons",
    body:  "Mindfuck"
}];

// INDEX
function indexBook(req, res) {
  res.render("books/index", {
    title: "book index",
    books: books
  });
}

// SHOW
function showBook(req, res) {
  var book = books[req.params.id];
  res.render("books/show",{
    title: "Books",
    book: book
  });
}

// CREATE
function createBook(req, res) {
  var book = {
    id: books.length,
    title: req.body.title,
    body: req.body.body
  };
  books.push(book);
  res.redirect("/books");
}

// NEW
function newBook(req, res) {
  res.render("books/new",{
    title: "new book"
  });
}

// UPDATE
function updateBook(req, res) {
  res.send("UPDATE: " + req.params.id);
}

// DELETE
function deleteBook(req, res) {
  res.send("DELETE: " + req.params.id);
}

// EDIT
function editBook(req, res) {
  var book = books[req.params.id];
  res.render("books/edit",{
    title: "edit book",
    book: book
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
