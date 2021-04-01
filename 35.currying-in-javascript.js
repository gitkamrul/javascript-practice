

function  currying(a){
   return function(b){
      return function(c){
        return  a+b+c
      }
   }
}

console.log(currying(5)(10)(15));         // Output: 30

// 35.currying-in-javascript.js