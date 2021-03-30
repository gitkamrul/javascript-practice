//Sample foor Loop
for (let i = 0;; i++) {
   console.log(i);
   if (i > 3) break;
   // more statements
}

//Infinite for Loop
var i = 0;

for (;;) {
   if (i > 3) break;
   console.log(i);
   i++;
}


//for...in loop
const object = {
   a: 1,
   b: 2,
   c: 3
};

for (const property in object) {
   console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"


// for..of loop  

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
   console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"



//nested for loop 
function myFunction() {
   var text = "";
   var i;
   var j;
   for (i = 0; i < 5; i++) {
      for (j = 0; j < 2; j++) {
         text += "The number is i = " + i + " and j = " + j + "<br>";
      }
   }
   document.getElementById("did").innerHTML = text;
}


/*
while Loop
while (condition) statement
*/
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// expected output: 3

/*
do...while
do statement while (condition);
*/

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"

