const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(240, 230, 24);
	bob2 = new Bob(265, 230, 24);
	bob3 = new Bob(290, 230, 24);
	bob4 = new Bob(315, 230, 24);
	bob5 = new Bob(340, 230, 24);

	roof1 = new Roof(240, 120, 25, 10);
	roof2 = new Roof(265, 120, 25, 10);
	roof3 = new Roof(290, 120, 25, 10);
	roof4 = new Roof(315, 120, 25, 10);
	roof5 = new Roof(340, 120, 25, 10);

	g = new Roof(300, 390, 600, 10);

	rope1 = new Chain(roof1.body, bob1.body);
	rope2 = new Chain(roof2.body, bob2.body);
	rope3 = new Chain(roof3.body, bob3.body);
	rope4 = new Chain(roof4.body, bob4.body);
	rope5 = new Chain(roof5.body, bob5.body);

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
	background(199);
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof1.display();
	roof2.display();
	roof3.display();
	roof4.display();
	roof5.display();

	g.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  	drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-10,y:10});

	}
}

