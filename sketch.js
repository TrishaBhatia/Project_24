
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,brick1,brick2,brick3,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,380,1200,20);

    brick1=new Brick(760,270,20,160);
    brick2=new Brick(1040,270,20,160);
    brick3=new Brick(900,360,300,20);

    ball=new Ball(100,350,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  ground.display();
  brick1.display();
  brick2.display();
  brick3.display();
  ball.display();

  
  drawSprites();
 
}

function keyPressed()
  {
    if(keyCode===UP_ARROW)
    {
      Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75});
      
    }
  }

