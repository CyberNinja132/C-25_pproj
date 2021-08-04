
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	paper = new Paper(200,200,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  text("press up arrow for some force",200,200);
  text("press any other keys to stop the force",200,150)
  text("only goal is to put the paper in trashcan",500,200);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();
  keyPressed();

  dustbinObj.depth = paper.depth;
  dustbinObj.depth = dustbinObj.depth + 10;

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:2,y:-10})
	}
}


