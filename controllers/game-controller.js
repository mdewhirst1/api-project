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
    title: "Games",
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
  console.log(req.body);
  var game={
    id: games.length,
    title: req.body.title,
    body: req.body.body
  };
  games.push(game);
  res.redirect("/");
}

// NEW
function newGame(req, res) {
  var game= {
    id: "",
    title: "",
    body: ""
  };

  res.render("games/new" , {
    title: "New Game",
    game: game,
    edit: false
  });
}

// UPDATE
function updateGame(req, res) {
  var game= games[req.params.id];
    game.title=req.body.title;
    game.body= req.body.body;
    games[req.params.id]= game;

    res.redirect("/");
}

// DELETE
function deleteGame(req, res) {
  games.splice(req.params.id, 1);
  res.redirect("/");
}

// EDIT
function editGame(req, res) {
  res.render("games/edit" , {
  title: "Edit Game",
  game: games[req.params.id],
  edit: true
});
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
