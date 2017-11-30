var weather = require('weather-js');
var fs = require("fs")
var textFile = "log.txt"

function userInfo(name, location) {
        this.name = name;
        this.location = location;
        this.date = Date.now()
        var logInfo = name + "," + location +"\n"

        this.getWeather = function () {
            weather.find({search: location, degreeType: 'F'}, function(err, result) {
                if(err) console.log(err);
                console.log(JSON.stringify(result, null, 2));
              });
              this.appendInfo()
        }

        this.appendInfo = function(){
            fs.appendFile(textFile, logInfo, function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
        }
    }

module.exports = userInfo