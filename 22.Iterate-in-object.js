
var obj = 
{
   a:10,
   b:20,
   c:30
}
console.log('a' in obj);
//Output: True
console.log('d' in obj);
//Output: False

for (let i  in obj) {  
   console.log('Index : '+i + "value: "+obj[i]);
}

/*
Output:
Index : avalue: 10
Index : bvalue: 20
Index : cvalue: 30

*/


