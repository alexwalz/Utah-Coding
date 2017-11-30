var name = process.argv[2]
name = name.toLowerCase()
var location = process.argv.slice(3).join(" ")
var userSearch = require("./userSearch.js")
var adminSearch = require("./weatherAdmin.js")

var user = new userSearch(name,location)
var admin = new adminSearch()


if( name === "admin"){
    admin.getData()
}else{
    user.getWeather(name, location)
}
