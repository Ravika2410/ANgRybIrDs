class parent
{
    constructor(x,y,w,h,a)
    {
        var property={restitution:0};
        this.ing=loadImage("base.png");
        this.width=w;
        this.height=h;
        this.body=Matter.Bodies.rectangle(x,y,this.width,this.height,property);
        Matter.World.add(myWorld,this.body);
    }
display()
{
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.ing,0,0,this.width,this.height);
    pop();
}
        
}