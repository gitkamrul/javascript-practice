


 var createpattern = function (width,height){
      this.width = width
      this.height= height
      this.draw = function(){
         console.log(` patter width is:P ${this.width} and height is : ${this.height}`)
      }

   }

   var rect2 =  new createpattern(50,40);
   rect2.draw();