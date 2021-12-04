// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.length)

a) Your answer: 9
b) Verify and explain: The answer is 9. Using the ".length" feature, we are logging the length of the variable "cohort".


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

a) Your answer: "l"
b) Verify and explain: The answer is "l". By logging "greeting[3]", we are logging the VALUE at the 3rd index,
of the variable "greeting". Indexes start at 0, so index 3 is the 4th character of the variable.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

a) Your answer: Ruby
b) Verify and explain: The answer is Ruby. This is the same concept as above, except that we are passing
a number value to the variable "index", and then using the value stored at "index", as our index.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

a) Your answer: SATURDAY SUNDAY
b) Verify and explain: The correct answer is an error message. Looks like ".toUpperCase" cannot be used with
arrays, only strings. If i make the variable a string, it uppercases everything. Split method could be used here.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

a) Your answer: number?
b) Verify and explain: Nice! It logs "number". This is because I'm asking it to log the "typeof" data, that
the value "dataTypes.length" is. dataTypes.length is the length of the array "dataTypes", so length is a numerical
value, and that's why "typeof" gives me "number".
