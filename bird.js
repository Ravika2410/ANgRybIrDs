class bird{
    constructor(x,y)
    {
        this.r = 25;

        var properties =
      {
        restitution:1,
        density:3,
        friction:0
      }

      this.body = Matter.Bodies.circle(x, y, this.r, properties);
      Matter.World.add(myWorld, this.body)
      this.image = loadImage("bird.png");
      this.smoke=loadImage("smoke.png");
      this.arr=[];

    }
  
    display()
     {
         if(this.body.position.x>300)
         {
             this.arr.push([this.body.position.x,this.body.position.y]);
         }

     const pos = this.body.position;
     const angle = this.body.angle;
     
     push();
     imageMode(CENTER)
     translate(pos.x, pos.y);
     rotate(angle);
     fill("red");
     imageMode(CENTER)
     image(this.image, 0, 0, this.r*2, this.r*2);
     pop();

     for(var i=0;i<this.arr.length;i++)
     {
         image(this.smoke,this.arr[i][0],this.arr[i][1]);
     }
     
    }
  }
  
    