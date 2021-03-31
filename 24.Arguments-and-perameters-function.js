function add(a, b) {
   var result = a + b;
   console.log(result); //Output: 30
}

add(10, 20);

function func(arr) {
   var sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   console.log("Result: " + sum)
}

var arr1 = [10, 20, 30]; //Output: Result: 60;
func(arr1);





// Arguments function 


function addAll() {
   var sum = 0;
   for (let i = 0; i < arguments.length; i++) {
     sum+=arguments[i]
   }
   console.log(sum);
}

addAll(10, 20, 30, 40);   //Output: 100;
addAll(10, 20, 30);   //Output: 60;