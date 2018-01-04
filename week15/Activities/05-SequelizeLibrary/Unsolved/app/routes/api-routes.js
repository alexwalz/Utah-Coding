// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


var Book = require("../models/book.js");


// Routes
// =============================================================
module.exports = function (app) {



  app.get("/api/all", function (req, res) {
    Book.findAll({}).then(function (results) {
      res.json(results);
    });
  });


  app.get("/api/:book", function (req, res) {
    var title = req.params.book
    Book.findAll({
      where: {
        title: title
      }
    }).then(function (results) {
      res.json(results);
    });

  });

  app.get("/api/genre/:genre", function (req, res) {
    var genre = req.params.genre
    Book.findAll({
      where: {
        genre: genre
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  app.get("/api/author/:author", function (req, res) {
    var author = req.params.author
    Book.findAll({
      where: {
        author: author
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  app.get("/api/books/long", function (req, res) {
    Book.findAll({
      where: {
        pages: {
          $gte: 300
        }
      }
    }).then(function (results) {
      res.json(results);
    });

  });

  app.get("/api/books/short", function (req, res) {

    Book.findAll({
      where: {
        pages: {
          $lte: 210
        }
      }
    }).then(function (results) {
      res.json(results);
    });

  });

  app.post("/api/new", function (req, res) {

    Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages
    }).then;

  });

  // Add sequelize code to delete a book
  app.post("/api/delete", function (req, res) {

    Book.destroy({
      where: {
        id: req.body.id
      }
    })
  });

};