
// JavaScript Demo: Standard built-in objects - Null


function getVowels(str) {
   const m = str.match([aeiou])
   if (m === null) {
     return 0;
   }
   return m.length;
 }
 
 console.log(getVowels('sky'));
 // expected output: 0
 

//  Boolean primitives.

var x = false;
if (x) {
  // this code is not executed
}



// undefined

// JavaScript Demo: Standard built-in objects - undefined
function test(t) {
   if (t === undefined) {
     return 'Undefined value!';
   }
   return t;
 }
 
 let x;
 
 console.log(test(x));
 // expected output: "Undefined value!"


//  Difference of null vs undefined  
 
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true