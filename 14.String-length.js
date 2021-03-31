
// Longhand 
var str = "kamrul hasan ";
 var le = 0;

while(true){
   if (str.charAt(le) == '') {
      break;
   }
   else{
      le++;
   }
}
console.log(le);       // length: 13


// otherwise shorhand 
console.log(str.length);    // Length 13
console.log("kamrul".length);   // length  6