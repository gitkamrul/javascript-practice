

function  main(first,second){
     function sayHey(){
        console.log(first +" "+ second)
     } 

     sayHey();
}

main("kamrul", "hasan");       // Output: kamrul hasan



function  hello(hay,name){
   function firstName(){
      if (name) {
         return  name.split(' ')[0];
      }else{
         return "Not found name !"
      }
   }
   var message  = hay + ", "+ firstName();
   console.log(message);
}

hello("good morning ", "kamrul hasan");     //Output:  good morning,  kamrul

hello("good morning");      //Output: good morning,  Not found name!