

var request = require("request");
var movieName = process.argv[2];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";



request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log("This movie's release year is: " + JSON.parse(body).Year);
    }
  });


