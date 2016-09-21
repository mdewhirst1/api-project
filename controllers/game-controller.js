var Game = require('../models/game');

// INDEX
function indexGame(req, res) {

  Game.find({}, function(err, games) {
    res.render("games/index", {
      title: "Games",
      games: games
    });
  });

}

// SHOW
function showGame(req, res) {

  Game.findById(req.params.id, function(err, game) {
    if(!game) return res.status(404).send("Not Found");
    if(err) return res.status(500).send(err);

    res.render("games/show", {
      title: "Game",
      game: game
    });
  });
}

// CREATE
function createGame(req, res) {

  Game.create(req.body, function(err, game) {
    if(err) return res.status(500).message(err);
    console.log(`game saved ${game}`);
    res.status(200).redirect("/");
  });
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

    res.redirect("/games");
}

// DELETE
function deleteGame(req, res) {
  games.splice(req.params.id, 1);
  res.redirect("/games");
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
