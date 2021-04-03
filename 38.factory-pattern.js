

 var createpattern = function (width,height){
   return {
      width:width,
      height:height,
      draw:function(){
         console.log(` patter width is:P ${this.width} and height is : ${this.height}`)
      }
   }
}

 var rect = createpattern(10,20);
rect.draw();


 var rect2 = createpattern(30,50);
 rect2.draw();
