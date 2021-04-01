
// The String Data Type
var a = "Let's have a cup of coffee."; // single quote inside double quotes
var b = 'He said "Hello" and left.';  // double quotes inside single quotes
var c = 'We\'ll never give up.';     // escaping single quote with backslash

// The Number Data Type
var a = 25;         // integer
var b = 80.5;       // floating-point number
var c = 4.25e+6;    // exponential notation, same as 4.25e6 or 4250000
var d = 4.25e-6;    // exponential notation, same as 0.00000425

// The Boolean Data Type
var isReading = true;   // yes, I'm reading
var isSleeping = false; // no, I'm not sleeping


// The Undefined Data Type
var a;
var b = "Hello World!"
 
console.log(a) // Output: undefined 
console.log(b) // Output: Hello World!


// The Null Data Type
var a = null;
console.log(a); // Output: null 
var b = "Hello World!"
console.log(b); // Output: Hello World! 
b = null;
console.log(b) // Output: null


// The Array Data Type
var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"]; 
console.log(colors[0]);   // Output: Red
console.log(cities[2]);   // Output: New York


// The Function Data Type
var greeting = function(){ 
   return "Hello World!"; 
}
// Check the type of greeting variable
console.log(typeof greeting) // Output: function
console.log(greeting());     // Output: Hello World!


// The Object Data Type
var emptyObject = {};
var person = {"name": "Clark", "surname": "Kent", "age": "36"};
 
// For better reading
var car = {
    "modal": "BMW X3",
    "color": "white",
    "doors": 5
}