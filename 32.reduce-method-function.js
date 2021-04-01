

var arr = [10,11,220,30,550,600]
var maxValue = arr.reduce(function(prev, curr){
   return Math.max(prev,curr);
});

var newArray = arr.reduce(function(prev, curr){
   return prev + curr;
});
console.log(newArray)      //Output 1421

console.log(maxValue);    // Output 600

