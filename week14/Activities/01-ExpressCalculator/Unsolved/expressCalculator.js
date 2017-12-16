var express = require("express");
var app = express();



app.get("/:operation/:first/:second", function(req, res) {

  var operation = req.params.operation;
  var first = req.params.first;
  var second = req.params.second;

parseFloat(first)
parseFloat(second)

var n1 =  Number(first)
var n2 = Number(second)

  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(bodyParser.json());

  console.log(operation)
  console.log(n1)
  console.log(n2)

  var result;
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
    var result = (n1+n2)
      break;
    case "subtract":
    var result = (n1-n2)
      break;
    case "multiply":
    var result = (n1*n2)
      break;
    case "divide":
    var result = (n1/n2)
      break;
    default:
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  res.send("<h2>Your Answer Is: "+result.toString()+"</h2>");

});
app.listen(3002);
