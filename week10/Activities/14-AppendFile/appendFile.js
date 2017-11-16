var fs = require("fs");

var textFile = process.argv[2];

fs.appendFile(textFile, "Hello Kitty", function(err) {

  if (err) {
    console.log(err);
  }

  else {
    console.log("Content Added!");
  }

});


