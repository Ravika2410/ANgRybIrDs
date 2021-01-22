class conn
{
    constructor(a,b)
    {
        this.sling1=loadImage("sling1.png");
        this.sling2=loadImage("sling2.png");
        this.sling3=loadImage("sling3.png");

        this.thread=Matter.Constraint.create
        (
          {
            pointA:b,
            bodyB:a,
            stiffness:0.14,
            length:10
          }
        );

        this.pointA=b;
        Matter.World.add(myWorld,this.thread);
        
    }

    display()
    {
       if(this.thread.bodyB)
       {
            var a=this.thread.bodyB.position;
            var b=this.pointA;
            strokeWeight(4);
            stroke(66,31,12);
            
            image(this.sling3,a.x-25,a.y,10,25);
        
            line(a.x-20,a.y,b.x-35,b.y);
            line(a.x+20,a.y,b.x+20,b.y);
        }
       image(this.sling1,200,450,50,100);
       image(this.sling2,170,430,50,60);

    }

    
    fly()
    {
        this.thread.bodyB=null;
    }
    
}                   