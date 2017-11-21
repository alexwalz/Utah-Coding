function sortNumber(a,b) {
    return a - b;
}

var numArray = [];

process.argv.forEach(function(element){
    numArray.push(element)
 });
 
 numArray.splice(0, 2);
 parseFloat(numArray)
numArray.sort(sortNumber);

console.log(numArray) ;


