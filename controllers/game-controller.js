var Game = require("../models/game");
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
  res.redirect("/games");
}

// NEW
function newGame(req, res) {
  var newGame= {
    id: "",
    title: "",
    body: ""
  };

  res.render("games/new" , {
    title: "New Game",
    game: newGame,
    edit: false
  });
}

// UPDATE
function updateGame(req, res) {
  Game.findByIdAndUpdate(req.params.id,{ $set: req.body}, function(err, game){
    res.redirect("/games");
  });
}

// DELETE
function deleteGame(req, res) {
  Game.findByIdAndRemove( req.params.id, function(err){
    res.redirect("/games");
  });
}

// EDIT
function editGame(req, res) {
  Game.findById(req.params.id , function(err, game) {
      // check for errors or for no object found
      if(!game) return res.status(404).send("Not found");
      if(err) return res.status(500).send(err);

      res.render("games/edit" , {
        title: "Game",
        game: game
      });
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
