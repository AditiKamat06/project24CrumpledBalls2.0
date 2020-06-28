var binBase, binRight, binLeft,ball,ground;
var ball; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
}

function setup() {
	createCanvas(1600,800);
	engine = Engine.create();
	world = engine.world;

	ball=new Balls(300,400,30,30);
	ball.shapeColor = color(0,255,0);
	//ball = Bodies.rectangle(300,400,30,30);
	World.add(world, ball);
	
	ground =  Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	binBase=createSprite(1080,650,250,10);
  	binRight=createSprite(1200,600,10,150);
  	binLeft=createSprite(950,600,10,150);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  drawSprites();
 }

function keyPressed() {
	if (keyCode === 32) {
	   Body.applyForce(this.ball, {x:0, y:0}, {x:-0.05, y:0.05});
	   //Body.applyForce(this.ball, {x:0, y:0}, {x:0, y:0});
	}
}