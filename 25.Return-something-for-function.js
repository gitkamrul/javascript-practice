// return function 

function add(a,b){
   var result =  a+b;
   return  result;
   
}
var r = add(10,20);       //Output 30
console.log(r);

function myFunc(name,email){
   return {
      name:name,
      email:email
   }
}

var kamrul = myFunc("kamrul hasan ", "kamrul@gmail.com");
console.log(kamrul);        //Output { name: 'kamrul hasan ', email: 'kamrul@gmail.com' }