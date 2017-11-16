

var param1 = process.argv[2]
var param2 = process.argv[3]


if(param1 === param2){
    console.log( "THEY ARE EQUAL")
} else {
    console.log("THEY ARE NOT EQUAL")
}

if (param1 % 7 === 0 ){
    console.log("First Number is a multiple of 7")
} else {
    console.log("First Number is NOT a multiple of 7")
}

if (param2 % 7 === 0 ){
    console.log("Second Number is a multiple of 7")
} else {
    console.log("Second Number is NOT a multiple of 7")
}