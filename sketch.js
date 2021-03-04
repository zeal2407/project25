
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//paper = loadImage("pics/paper.png");
	//binImage = loadImage("pics/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400, 680, 800, 20);
	paper = new Paper(250,450,50);

	//bin = createSprite(610,585,20,20);
	//bin.addImage(binImage);
	//bin.scale=0.4
	

	side1 = new Dustbin(550, 620, 20, 100);
	bottom = new Dustbin(610, 660, 100, 20);
	side2 = new Dustbin(670, 620, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ground.display();
  	
  side1.display();
  side2.display();
  bottom.display();
  
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x: 85, y: -85})
	}
  }



