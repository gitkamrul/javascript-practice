

var arr = [10,20,30,45,11];

var find= 110;
var isFound = false;

for (let i = 0; i < arr.length; i++) {
   
   if (arr[i] === find) {
      
      console.log("Find you data : "+find);
      isFound = true;
      break;

   }

   
}
if(!isFound){
   console.log("'Sorry' Not found your data ");
}