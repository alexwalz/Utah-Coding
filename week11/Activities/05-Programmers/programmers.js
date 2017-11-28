
// * In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.

// * Your "Programmer" constructor should be able to take in the following information...

//   * The programmer's name
//   * Their position/job title
//   * How old they are
//   * Favorite programming language

// * Now create a method for the constructor that would print all of the information contained within an object to the console.

// * Finally, create a "Programmer" object and call the method to print its contents


function Character(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
    this.printInfo = function () {
        console.log("\n============================================\n")
        console.log("The Programmers Name Is: ", name);
        console.log("Their Job Title Is: ", position);
        console.log("Their Age Is: ", age);
        console.log("Their favorite programming languge is: ", language, "\n");
        console.log("\n============================================\n")

    };
}

var nodeProgramer = new Character("Alex", "Developer", 27, "React.JS")

nodeProgramer.printInfo()