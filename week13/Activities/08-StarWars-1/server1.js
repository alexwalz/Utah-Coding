// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================

var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

var lukeSkywalker = {
  name: "Luke Skywalker",
  role: "Jedi Master",
  age: 25,
  forcePoints: 1100
};

var obiwanKenobi = {
  name: "Obi Wan Kenobi",
  role: "Jedi",
  age: 125,
  forcePoints: 1100
};


// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
  res.json(darthmaul);
});

app.get("/lukeskywalker", function(req, res) {
  res.json(lukeSkywalker);
});

app.get("/obiwankenobi", function(req, res) {
  res.json(obiwanKenobi);
});

// Listener
// ===========================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
