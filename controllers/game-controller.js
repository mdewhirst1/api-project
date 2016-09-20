var games=[{
    id: 0,
    title: "Dead by Dayligh",
    body:  "Run from the villain and fix generators, ESCAPE!"
  },
  {
    id: 1,
    title: "League of Legends",
    body:  "Salty and rude players"
  },
  {
    id: 2,
    title: "Fallout 4",
    body:  "Apocalyptic story game, RADIATION!"
  },
  {
    id: 3,
    title: "FIFA",
    body:  "The most boring game ever invented"
}];

// INDEX
function indexGame(req, res) {
  res.render("games/index", {
    games: games
  });
}

// SHOW
function showGame(req, res) {
  var game = games[req.params.id];
  res.render("games/show",{
    title: "Games",
    game: game
  });
}

// CREATE
function createGame(req, res) {
  res.send("CREATE");
}

// NEW
function newGame(req, res) {
  res.render("games/new",{
    title: "new game"
  });
}

// UPDATE
function updateGame(req, res) {
  res.send("UPDATE: " + req.params.id);
}

// DELETE
function deleteGame(req, res) {
  res.send("DELETE: " + req.params.id);
}

// EDIT
function editGame(req, res) {
  res.send("EDIT: " + req.params.id);
}

module.exports = {
  index: indexGame,
  show: showGame,
  create: createGame,
  new: newGame,
  update: updateGame,
  delete: deleteGame,
  edit: editGame
};
