// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language;
  // creates the printInfo method and applies it to all programmer objects
  this.printInfo = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
      "\nAge: " + this.age + "\nLanguages: " + this.language);
  };
}

for (i=0; i<2; i++){
  inquirer.prompt([{
    name: "name",
    message: "What is your name?"
  }, {
    name: "position",
    message: "What is your current position?"
  }, {
    name: "age",
    message: "How old are you?"
  }, {
    name: "language",
    message: "What is your favorite programming language?"
  }]).then(function (answers) {

    var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
    newGuy.printInfo();

  });
}