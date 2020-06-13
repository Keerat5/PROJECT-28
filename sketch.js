const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
  dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1350,780);

	engine = Engine.create();
  world = engine.world;
  
  paper = new Paper();

  ground = new Ground(715,770,1350,50);

  side1 = new Dustbin(941,660,10,150);
  side2 = new Dustbin(996,739,119,10);
  side3 = new Dustbin(1050,660,10,150);

  launcher = new Launcher(paper.body,{x:400,y:250});

  dustbin = createSprite(994,647,27,27);
  dustbin.addImage(dustbinImg);
  dustbin.scale = 0.6;

	Engine.run(engine);
  
}

function draw() {
  background("white");

  ground.display();
  side1.display();
  side2.display();
  side3.display();
  paper.display();
  launcher.display();

  text("x:"+mouseX,100,100); 
  text("y:"+mouseY,100,130);
  
  drawSprites();
 
}
/*function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:165,y:-210});
	}
}*/

function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}
