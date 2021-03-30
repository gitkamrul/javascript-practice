// javascript Number

var x = 2; // integer number
var y = 3.14; // floating-point number
var z = 0xff; // hexadecimal number

// Extra large numbers
var x = 1.57e4; // same as 15700
var y = 4.25e+6; // same as 4.25e6 or 4250000
var z = 4.25e-6; // same as 0.00000425

// hexadecimal notation (base 16)
var x = 0xff; // same as 255
var y = 0xb4; // same as 180
var z = 0x00; // same as 0

// Operating on Numbers and Strings
var x = 10;
var y = 20;
var z = "30";

// Adding a number with a number, the result will be sum of numbers
console.log(x + y); // 30

// Adding a string with a string, the result will be string concatenation
console.log(z + z); // '3030'

// Adding a number with a string, the result will be string concatenation
console.log(x + z); // '1030'

// Adding a string with a number, the result will be string concatenation
console.log(z + x); // '3010'

// Adding strings and numbers, the result will be string concatenation
console.log("The result is: " + x + y); // 'The result is: 1020'

// Adding numbers and strings, calculation performed from left to right
console.log(x + y + z); // 'The result is: 3030'



// Representing Infinity

var x = 5 / 0;
console.log(x); // Infinity

var y = -5 / 0;
console.log(y); // -Infinity


// Converting Numbers to Strings
var x = 10;
var y = x.toString();
console.log(y);  // '10'
console.log(typeof y);  // string
console.log(typeof x);  // number
console.log((12).toString());  // '12'
console.log((15.6).toString());  // '15.6'
console.log((6).toString(2));  // '110'
console.log((255).toString(16));  // 'ff'
