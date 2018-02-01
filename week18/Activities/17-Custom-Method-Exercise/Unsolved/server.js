var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

var User = require("./userModel.js");
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/custommethoddb", {
  useMongoClient: true
});



app.post("/submit", function(req, res) {

  var newUser = new User(req.body);
  newUser.fullNameUpdate();
  newUser.lastUpdatedDate();

  User.create(newUser)
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json(err);
    });
});



app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
