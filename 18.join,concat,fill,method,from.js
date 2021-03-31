

var arr = [10,20,30];
var arr2= [11,21,31];
console.log(arr);
// Output 
/*
[ 10, 20, 30 ]
*/

console.log(arr.join(","));
// Output 
/*
10,20,30
*/

// fill method for javascript 
//console.log(arr.fill("fill"));
// Output Result 
/*
[ 'fill', 'fill', 'fill' ]
*/

// Array Concat Method 

var arr3 = arr.concat(arr2);
console.log(arr3);
//Output: [ 10, 20, 30, 11, 21, 31 ]


// from method for javascript 

var one = [2,4,6];
var two = Array.from(one);
console.log(two);
// Output
/*
[ 2, 4, 6 ]
*/
