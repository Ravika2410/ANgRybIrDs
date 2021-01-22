var myWorld;
var myEngine,body;
var ball;
var e,r;
var g;
var b1,b2,b3,b4,b5,b6,b7;
var p1,p2,p3;
var l1,l2,l3,l4,l5;
var c;
var bg;
var platform;
var o;
var gameState=0;
var bgm,bgn;
var score=0;

function preload()
{

    bgm=loadImage("bg.png");
    bgn=loadImage("bg2.jpg");

}

function setup()
{
    const canvas = createCanvas(1200,800);
    myEngine=Matter.Engine.create();
    myWorld=myEngine.world;


  bg=bgm;

    platform=new ground(100,650,200,310);
    g=new ground(width/2,height-10,width,20);

    b1=new box(700,750);
    b2=new box(920,750);
    b3=new box(700,650);
    b4=new box(920,650);
    b5=new box(810,450);
    b6=new box(700,550);
    b7=new box(920,550);

    p1=new pig(810,750);
    p2=new pig(810,650);
    p3=new pig(810,550);

    l1=new log(810,700,300,PI/2);
    l2=new log(810,600,300,PI/2);
    l3=new log(760,450,150,PI/7);
    l4=new log(870,450,150,-PI/7);
    l5=new log(810,500,300,PI/2);

    c=new bird(70,700);

    o=new conn(c.body,{x:185,y:415});
    const mouse = Matter.Mouse.create(canvas.elt);


}

function draw()
{
    background(255);

    image(bg,width/2,height/2,width,height);
    
    Matter.Engine.update(myEngine);
    g.display();
    platform.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();

    p1.display();
    p2.display();
    p3.display();

    l1.display();
    l2.display();
    l3.display();
    l4.display();
    l5.display();

    c.display();

    o.display();

    getTime();

    text("Score:  "+score,1000,80);


}


function mouseDragged()
{
    if(gameState==0)
    {
       Matter.Body.setPosition(c.body,{x:mouseX,y:mouseY});
    }
}

function keyPressed()
{
    if(keyCode==32)
    {
        c.arr=[];
        o.thread.bodyB=c.body;
    }
}

 function mouseReleased()
{
    o.fly();
    gameState=1;
}

async function getTime()
{
    var response= await (await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")).json();
    var r = Number(response.datetime.slice(11,13));
    if(r>=5 && r<=19)
    {
        bg=bgm;
    } else {
        bg=bgn;
    }
}