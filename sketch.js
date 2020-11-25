
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var dustbin1, dustbin2, dustbin3;
var bbb

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(400,650,800,20);

  ball = new Ball(140,100,40);
  
  dustbin1=new Dustbin(600,630,70);
	
  

  
 
  


  
	Engine.run(engine);
  
}


function draw() {

  background(0);

  ball.display();
  dustbin1.display();
  ground.display();
  drawSprites();
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball.body, ball.body.position, {x:60, y:-75})

}

}



