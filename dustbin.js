class Dustbin{
    constructor(x, y, width, height) {
        var options = {
           isStatic:true, 
            
        }
        this.body = Bodies.rectangle(x, y,width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.dustbin = loadImage("pics/dustbingreen.png");
      }
      display(){
        image(this.dustbin,555, 560,110,110);
          var pos=this.body.position;
          fill(225);
          rect(pos.x, pos.y, this.width, this.height);
      }
    }
