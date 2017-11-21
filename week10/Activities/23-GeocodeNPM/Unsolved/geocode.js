// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)

var geocoder = require('geocoder');

searchArr = [];

process.argv.forEach(function(element){
    searchArr.push(element)
 });

 searchArr.splice(0, 2);

var state = searchArr[searchArr.length-1]
var city;

searchArr.forEach(function(element){
    searchArr.join(element)
 });

console.log(city)


geocoder.geocode("'" + city +", "+ state + "'", function ( err, data ) {
    console.log(data)
});

// Build your address as an array or string

// Then use Geocoder NPM to geocode the address
