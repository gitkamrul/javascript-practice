// Reverse An array for javascript 


var arr  = [1,2,3,4,5,6,7,8,9];
// Longhand 
for (let i = 0; i < arr.length/2; i++) {
   var temp = arr[i]; 
   arr[i]= arr[arr.length-1-i];
   arr[arr.length-1-i] = temp;
}
console.log(arr);

// Output 
/*
[
   9, 8, 7, 6, 5, 4, 3, 2, 1
 ]
 */

//  Shorthand

console.log(arr.reverse());
// Same Result 0.........
// Output 
/*
[
   9, 8, 7, 6, 5, 4, 3, 2, 1
 ]
 */

