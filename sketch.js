
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pap, ground, box1, box2, box3 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,690,800,20);
	pap = new paper(100,100,50,50);
	box1 = new Box(600,680,100,200);
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("yellow");

	  pap.display();
	  ground.display();
	  box1.display();
	  
  
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(pap.body, pap.body.position, {x:80, y:-80});
	}
}




