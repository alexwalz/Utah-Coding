var opp = process.argv[2]
var number1 = process.argv[3]
var number2 = process.argv[4]

var num1 = parseFloat(number1)
var num2 = parseFloat(number2)

if (opp === "add"){
    console.log( num1 + num2)
} else if (opp === "subtract"){
    console.log(num1 - num2)
} else if( opp === "multiply"){
    console.log(num1*num2)
}else if( opp === "divide"){
    console.log(num1/num2)
}else if( opp === "algebra"){

    // Use algebra 4x+2=18 as an example

    var firstNum = process.argv[3][0]
    var operator = process.argv[3][2]
    var secondNum = process.argv[3][3]
    var stringAnswer = (process.argv[3][5] + process.argv[3][6])
    var numAnswer = parseFloat(stringAnswer)

    if (operator = "+"){
        numAnswer = numAnswer - secondNum
        numAnswer = numAnswer/ firstNum

        console.log("X= " + numAnswer)
    }

}else {
    console.log("invalid operator")
}