// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var resNumber = 1


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var customerInfo = [];
var waitingInfo = [];

// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "./reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


app.get("/api/tables", function(req, res) {
    var customer = req.params.tables;
    return res.json(customerInfo);
  });



  app.get("/api/waitingTables", function(req, res) {
    var customer = req.params.tables;
    return res.json(waitingInfo);
  });

  app.post("/api/clear", function(req, res) {
    customerInfo = [];
    waitingInfo = [];
  });


app.post("/api/new", function(req, res) {

  var newCustomer = req.body;
  console.log(newCustomer);

  if(resNumber<6){
    customerInfo.push(newCustomer);
    res.json(newCustomer);
  }else{
    waitingInfo.push(newCustomer);
    res.json(newCustomer);
  }



  resNumber++
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});