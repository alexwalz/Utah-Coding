var weather = require('weather-js');
var fs = require("fs")
var textFile = "log.txt"

function admin() {
        this.date = Date.now()
        this.getData = function () {
            fs.readFile(textFile, 'utf8', function (err,data) {
                if (err) {
                  return console.log(err);
                }
                console.log(data);
              });
        }
    }

module.exports = admin