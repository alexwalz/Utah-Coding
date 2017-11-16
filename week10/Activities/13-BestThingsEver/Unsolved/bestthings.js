


var fs = require("fs");
fs.readFile("best_things_ever.txt", "utf8", function(error, data) {
    

  if (!error) {
    var dataArr = data.split(",");
    for ( i=0 ; i<dataArr.length; i++){
        console.log(dataArr[i])

        fs.appendFile("output.txt", dataArr[i] + "\n", function(err) {
              if (err) {
                return console.log(err);
              }
              console.log("output.txt was updated!");
            });
    }
  } else {
      console.log(error)
  }

});
