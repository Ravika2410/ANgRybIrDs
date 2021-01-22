class pig extends parent
{
    constructor(x,y)
    {
        super(x,y,50,50);
        this.ing=loadImage("enemy.png");
        this.property=0;
        this.visible=255;
    }
    display()
    {
        if(this.body.speed<5)
        {
            super.display();
        }  else
        {
            Matter.World.remove(myWorld,this.body);
            this.property++;
            if(this.property>0&&this.property<=150)
            {
                score++;
            }
            push()
            tint(255,this.visible);
            image(this.ing,this.body.position.x,this.body.position.y,50,50);
            this.visible=this.visible-5;
            pop();
        }
      
    }
}