// New array generate work this filter method 
var arr1 = [1,2,3,4,5,6,7,8,9];

var arr2 = arr1.filter(function(value){
   return  value%2 ===0;
});

console.log(arr2);         // Output:  [ 2, 4, 6, 8 ]


var arr3 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

var arr4 = arr3.filter(function(value){
   return  value.length > 5;
});
console.log(arr4)        //Output: [ 'exuberant', 'destruction', 'present' ]
