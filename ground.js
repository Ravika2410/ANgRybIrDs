class ground
{
constructor(x,y,w,h)
{
    this.ing=loadImage("base.png");
    this.body=Matter.Bodies.rectangle(x,y,w,h,{isStatic:true});
    this.width=w;
    this.height=h;
    Matter.World.add(myWorld,this.body);
}

display()
{
    imageMode(CENTER);
    fill("white");
    image(this.ing,this.body.position.x,this.body.position.y,this.width,this.height);
}

}