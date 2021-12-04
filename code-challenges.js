// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 211

if (temp > 212){
  console.log(temp, "is above boiling point!");
} else if (temp === 212){
  console.log(temp, "is at boiling point!");
} else {
  console.log(temp, "is below boiling point!");
}
// var temp = 350
// var temp = 212


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 42, 9, 13]
// making two strings join using concat
var both = myNumbers1.concat(myNumbers2)
// logging the length
console.log(both.length);


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

var currentCohort = "Echo 2021"
// // make it into an array so that it can be reversed
var splat = currentCohort.split("")
// reverse it
splat.reverse()
// join it back together as a string so it gives expected output
var final = splat.join("")

console.log(final);


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

var myArray = [13, 34, 5, 10, 27, 42]
// iterate over the array
for (let i=0; i < myArray.length; i++){
// check to see if it's even using %
  if (myArray[i] % 2 === 0){
    // log statement
    console.log("even");
  } else {
    console.log("odd");
  }
}


// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

var number1 = 27
var number2 = 24
// create variable to return
var response = 0
// use conditional to compare numbers
if (number1 < number2){
// subtracrt num1 from num2 if num1 is smaller
  response = number2 - number1
  // logical conclusion that if num1 is not smaller than num2, num2 is smaller
    // exception if numbers are the same but no instructions on what to return for edge case.
} else {
  response = number1 - number2
}
console.log(response);

// var number1 = 27
// var number2 = 24
