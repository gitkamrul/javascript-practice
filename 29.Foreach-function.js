

var arr = [10,20,30,40,50,60];
var sum = 0;

arr.forEach(function(value, index, arr){
   console.log(value+' :'+index+' :'+arr)
})

/*
Output 
10 :0 :10,20,30,40,50,60
20 :1 :10,20,30,40,50,60
30 :2 :10,20,30,40,50,60
40 :3 :10,20,30,40,50,60
50 :4 :10,20,30,40,50,60
60 :5 :10,20,30,40,50,60

*/

// summation foreach loop 

arr.forEach(function(value){
   sum+=value;
});
console.log(sum)      // Output 210;



