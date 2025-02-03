////////////// ALERTS //////////////

// alert("Hello World")

////////////// VARIABLES FOR STRINGS //////////////

const firstName = "Ch"
var lastName = "Bashaar"

console.log(firstName + " " + lastName)

////////////// VARIABLES FOR NUMBERS / TEXT //////////////

var num = 1
var num2 = 2
var num3 = 3

console.log(num + num2 + num3)

////////////// VARIABLES NAMES LEGAL AND ILLEGAL //////////////

////////// Legal Names

var legalNames
var LegalNames

////////// Illegal Names

// var 1legalNames
// var /LegalNames

////////////// Math expressions : Familiar operators //////////////

var number = 4
var number2 = 2 + 2
var number3 = 7 - 3
var number4 = 8 * 3
var number5 = 4 / 2
var leftOver = 19 % 5 //Define Reminder
var numberSum = number + number2 + number3 + number4 + number5 + leftOver

console.log(numberSum);

////////////// Math expressions : Unfamiliar operators //////////////

var digit = 1
digit++ // Increase value by one

var digitSum = 1 + digit++

console.log(digit)

var digit = 1
digit-- // Decrease value by one

var digitSum = 1 + digit--

console.log(digit)

////////////// Math expressions : Eliminating ambiguity //////////////

// 1st method
var totalCost = 1 + 4 * 3

// 2nd method
var totalCost = 1 + (4 * 3)

// 3rd method
var totalCost = (1 + 4) * 3

// 4th method
var totalResultOfComputationost = (2 * 4) * 4 + 2;

// 5th method
var totalResultOfComputationost = (2 * 4) * (4 + 2);

console.log(totalCost, totalResultOfComputationost);

////////////// Concatenating text strings //////////////

// 1st method
var message = "Thanks"
var name = "John"
var banger = "!"

console.log(message + ", " + name + banger)

// 2nd method
var message = "Thanks"
var name = "John"
var banger = "!"
var alert = message + ", " + name + banger

console.log(alert)

////////////// If Statements //////////////

var no1 = 53
var no2 = 20

var biggerNo

if (no1 > no2) {
    biggerNo = no1
} else { biggerNo = no2 }

console.log(biggerNo);

var fullMarks = 100
var obtainedMarks = 80
var percentage = obtainedMarks / fullMarks * 100
var grade

if (percentage >= 90) {
    grade = "A"
} else if (percentage >= 80) {
    grade = "B"
} else if (percentage >= 70) {
    grade = "C"
} else { grade = "F" }

console.log(grade);