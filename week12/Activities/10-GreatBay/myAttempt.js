var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "greatBay_DB"
});

start()

function start() {
    inquirer
      .prompt({
        name: "choice",
        type: "list",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID"]
      })
      .then(function(answer) {

        var choice = answer.choice

        console.log(choice)
        
        if (choice === "POST") {
          postAuction();
        }
        else {
          bidAuction();
        }

      });
  }

  function postAuction(){

        inquirer
        .prompt([
            {
              name: "item",
              type: "input",
              message: "What is the item you would like to submit?"
            },
            {
              name: "category",
              type: "input",
              message: "What category would you like to place your auction in?"
            },
            {
              name: "startingBid",
              type: "input",
              message: "What would you like your starting bid to be?",
              validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
            }
          ])
          .then(function(answer) {
            var itemName = answer.item;
            var category = answer.category;
            var startingPrice = answer.startingBid;

            console.log("Inserting a new product...\n");
            var query = connection.query(
              "INSERT INTO auctions SET ?",
              {
                item_name: itemName,
                category: category,
                starting_bid: startingPrice
              },
              function(err, res) {
                console.log(res.affectedRows + "\n product inserted!\n");
              }
            );
            start()
          });
  }


  function bidAuction(){

    console.log("This isn't available yet.")

  }


