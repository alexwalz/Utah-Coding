var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "top5000_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
  });


function start() {
  inquirer
    .prompt({
      name: "searchQuery",
      type: "list",
      message: "Would you like to search for an Artist or Ranking?",
      choices: ["ARTIST", "RANKING", "MULTIPLE WINNERS"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.searchQuery === "ARTIST") {
        artistSearch();
      }
      else if( answer.searchQuery === "MULTIPLE WINNERS"){
        topArtist();
      }
      else {
        rankSearch();
      }
    });
}


function artistSearch() {

    inquirer
    .prompt({
      name: "artistSearch",
      type: "input",
      message: "What artist are you searching for?",
    })
    .then(function(answer) {
        var artistQuery = answer.artistSearch

        connection.query("SELECT * FROM topSongs WHERE ?",[{artist: artistQuery}], function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            for (i = 0; i< res.length; i++){
                console.log("Rank",res[i].rank, "|| Song:", res[i].song + "|| Year:" + res[i].year)
            }           
            connection.end();
          });

    });

  }


  function rankSearch(){

    inquirer
    .prompt({
      name: "rankSearch",
      type: "input",
      message: "What rank are you searching for?",
    })
    .then(function(answer) {
        var rankQuery = answer.rankSearch
        var rankSearch = rankQuery.toString()
        var query = "SELECT * FROM topSongs WHERE ?"

        connection.query(query,[{rank: rankSearch}], function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            for (i = 0; i< res.length; i++){
                console.log(res[i].rank, "|", res[i].artist, "|", res[i].song, "|", res[i].year)
            }
            connection.end();
          });

    });

  }


  function topArtist(){

  var query = "SELECT artist FROM topSongs GROUP BY artist HAVING count(*) > 1";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].artist);
    }
  });

  }

