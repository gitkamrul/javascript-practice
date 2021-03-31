

var arr = [
   [10,20,30,40,50],
   [11,21,31,41,51]
]

console.log(arr[0][0])   //declaire for first array first index
// Output : 10;

console.log(arr[1][1])   //declaire for second array second index
//output: 21

// for loop output for multidimension array 


for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr[i].length; j++) {
      console.log("Element is "+ i + " : "+ arr[i][j]);
   }   
}
// Output 

/*
Element is 0 : 10
Element is 0 : 20
Element is 0 : 30
Element is 0 : 40
Element is 0 : 50
Element is 1 : 11
Element is 1 : 21
Element is 1 : 31
Element is 1 : 41
Element is 1 : 51

*/




