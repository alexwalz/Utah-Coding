
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Book = sequelize.define("books", {
  title:  Sequelize.STRING,
  author:  Sequelize.STRING,
  genre:  Sequelize.STRING,
  pages:  Sequelize.INTEGER,

}, {
  timestamps: false
});

Book.sync();

module.exports = Book;
