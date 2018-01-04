// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();


// Routes
// =============================================================

// app.get("/chirps", function(res, req){
//   connection.query('SELECT * FROM chirps', function (err, results) {
//     if (err) throw err
//     return res.json(results);
// })
//   })



module.exports = function (app) {


  app.get("/chirps", function (req, res) {

    connection.query('SELECT * FROM chirps', function (err, results) {
      if (err) throw err
      return res.json(results);

    })
  });



  app.post("/chirps", function (req, res) {
    console.log("CHIRP DATA:")
    console.log(req.body)

    var dbQuery = "INSERT INTO chirps (user, time, message) VALUES (?,?,?)"

    connection.query(dbQuery, [req.body.user, req.body.time, req.body.message], function (err, results) {
      if (err) throw err
      console.log("Chirp Successfully Saved")

    })
  });

  

};