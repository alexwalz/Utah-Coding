var weather = require('weather-js');
var fs = require("fs")
var textFile = "log.txt"

function admin(name, location) {
        this.name = name;
        this.location = location;
        this.date = Date.now()
        var logInfo = name + "," + location +"\n" 
        this.getData = function () {
            fs.readFile(textFile, 'utf8', function (err,data) {
                if (err) {
                  return console.log(err);
                }
                console.log(data);
              });
        }
        this.newUserSearch = function(){
            fs.appendFile(textFile, logInfo, function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
        }
    }

module.exports = admin