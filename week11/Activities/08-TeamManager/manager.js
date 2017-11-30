var inquirer = require("inquirer");

function Player(name, position, offense, defense) {

    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    this.goodGame = function () {

        var random = Math.floor(Math.random() * 2) + 1
        if (random = 1) {
            console.log("Your old offense was:", offense, ". Your old defense was:", defense)
            offense + 1
            defense + 1
            console.log("Your new offense is:", offense, ". Your new defense is:", defense)
        } else {
            console.log("You stayed the same")
        }

    }

    this.badGame = function () {

        var random = Math.floor(Math.random() * 2) + 1
        if (random = 1) {
            console.log("Your old offense was:", offense, ". Your old defense was:", defense)
            offense - 1
            defense - 1
            console.log("Your new offense is:", offense, ". Your new defense is:", defense)
        } else {
            console.log("You stayed the same")
        }

    }

    this.printInfo = function () {
        console.log("\n================================\n")
        console.log("Player Name:", name)
        console.log("Postion:", position)
        console.log("Offensive Rating:", offense)
        console.log("Defensive Rating:", defense)
        console.log("\n================================\n")
    }

}


var count = 0;
var starterArray = [];
var subArray = [];


var askQuestion = function () {
    if (count < 3) {
        console.log("NEW PLAYER");

        inquirer.prompt([{
            name: "name",
            message: "What the player's name?"
        }, {
            name: "position",
            message: "What is your their position"
        }, {
            name: "offense",
            message: "What is your their offensive rating"
        }, {
            name: "defense",
            message: "What is your their defensive rating"
        }]).then(function (answers) {


            var newPlayer = new Player(

                answers.name,
                answers.position,
                answers.offense,
                answers.defense
            );

            if (answers.position === "Starter" || answers.position === "starter") {
                starterArray.push(newPlayer);
            } else {
                subArray.push(newPlayer);
            }

            count++;
            askQuestion();

        });
    } else {
        runGame()
    } 
};

askQuestion();

function runGame() {
    var totalOffense = 0;
    var totalDefense = 0;

    var randomOffense = Math.floor(Math.random() * 50) + 1
    var randomDefense = Math.floor(Math.random() * 50) + 1
    var teamScore = 0;
    var counter = 0
    var start = true;

    while (counter < 5) {

        if(start){
            start = false;
        for (var x = 0; x < starterArray.length; x++) {

            var offensiveRating = parseInt(starterArray[x].offense)
            var defensiveRating = parseInt(starterArray[x].defense)

            totalOffense = totalOffense + offensiveRating
            totalDefense = totalDefense + defensiveRating
        }


        if (randomOffense < totalOffense) {
            teamScore++
        }

        if (randomDefense > totalDefense) {
            teamScore--
        }


        counter ++

        subCheck()

        console.log("FINAL TEAM SCORE",teamScore)
    }

}
}




function subCheck() {
    inquirer
    .prompt([
      // Here we create a basic text prompt.
      {
        type: "list",
        message: "Do you want to substitue?",
        choices: ["yes", "no"],
        name: "sub"
      }
    ])
    .then(function(inquirerResponse) {
      // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
      if (inquirerResponse.sub === "yes" ) {
        console.log("YES")
      }
      else {
        console.log("NO");
      }
    });

    start = true;
}


//     * After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with 1 player from within the subs array.
//   * After the game has finished (been run  5 times):
//     * If the score is positive, run `goodGame` for all of the players currently within the starters array.
//     * If the score is negative, run `badGame` for all of the players currently within the starters array.
//     * If the score is equal to zero, do nothing with the starters.


//     * Give the user a message about if they won, and the status of their starters.
//     * After printing the results, ask the user if they would like to play again.
//       * Run `playGame` from the start once more if they do.
//       * End the program if they don't.



// * HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// * HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.