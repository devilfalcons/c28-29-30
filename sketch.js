const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball=new Ball(200,200);
ground=new Ground(600,380,1200,20);
    slingshot = new SlingShot(ball.body,{x:200, y:50});
    box1=new Box(920,340,20,40);
    pi=new Ground(800,200,170,20)
    box2=new Box(780,170,10,50);
    box3=new Box(810,170,10,50);
    box4=new Box(840,170,10,50);
}

function draw(){
  Engine.update(engine);
  background("black");
  fill("blue");
box1.display();
ball.display();
slingshot.display()
ground.display();
pi.display()
fill("blue");
box2.display();
fill("blue");
box3.display();
fill("blue");
box4.display();
}
function mouseDragged(){
 
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
 
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(ball.body);
  }
}