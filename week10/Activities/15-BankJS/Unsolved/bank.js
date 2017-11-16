var fs = require("fs");

var method = process.argv[2];
var ammount = process.argv[3] + ", "
var textFile = 'bank.txt';
var dataArr;


fs.readFile("bank.txt", "utf8", function(error, data) {
  if (error) {
    console.log(error);
  }else {         
     dataArr = data.split(", ");            
                    }
});


fs.appendFile(textFile, ammount, function(err) {
    dataArr = data.split(", "); 
    
    for (i=0; i<dataArr.length; i++){
        dataArr[i] = parseFloat(dataArr[i])

        var sum = dataArr.reduce(add, 0);
        
        function add(a, b) {
            return a + b;
        }

        console.log(sum)

    }



})

