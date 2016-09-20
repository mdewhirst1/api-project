// INDEX
function indexBook(req, res) {
  res.send("<h1>Homepage</h1>");
}

// SHOW
function showBook(req, res) {
  res.send("SHOW: " + req.params.id);
}

// CREATE
function createBook(req, res) {
  res.send("CREATE");
}

// NEW
function newBook(req, res) {
  res.send("NEW");
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
  res.send("EDIT: " + req.params.id);
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