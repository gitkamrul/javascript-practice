

// Higher order function 

function add(a,b){
   return a+b;
}
function multipulate(a,b,func){
  var c = a+b;
  var d = a-b;



//   otherwise funtion declire
/*
   return function(){
      var m = func(a,b);
      return c*d*m
   }

   */


// Longhand 
  function multi(){
     var m = func(a,b);
     return c*d*m
  }
  multi();
  

}


console.log(multipulate(50,20,add))
