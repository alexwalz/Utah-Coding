var db = require("../models");



module.exports = function(app) {
  app.get("/api/posts", function(req, res) {
    db.Post.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    db.Post.create({
      body: req.body.body,
      title: req.body.title,
      category: req.body.category

    }).then(function(data) {
      res.json(data);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });




  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });
};
