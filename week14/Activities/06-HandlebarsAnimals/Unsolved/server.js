var express = require("express");
var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function(req, res) {
  res.render("dog", animals[0])

});

app.get("/all-pets", function(req, res) {
  var data = {
    anims:[]
  }
  for(i=0; i< animals.length; i++){
    var currentAnimal = animals[i]
    if(currentAnimal.pet){
      data.anims.push(currentAnimal)
    }
  }
  res.render("index", data)
});



app.get("/all-non-pets", function(req, res) {
  var data = {
    anims:[]
  }
  for(i=0; i< animals.length; i++){
    var currentAnimal = animals[i]
    if(!currentAnimal.pet){
      data.anims.push(currentAnimal)
    }
  }
  res.render("index", data)

});

app.listen(port);
