
var obj = {
   width:100,
   height:50,
   draw:function(){
      console.log(`This is ${this.width}  and height is ${this.height}`)  
      // Output: This is 100  and height is 50

      // Error  define 
      //console.log(width + " and "+ height)
   }
}

obj.draw();

