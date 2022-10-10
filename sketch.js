var ball,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	groundObj = new Ground(width / 2, 670, width, 20);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}


	//Create the Bodies Here.
	ball = Bodies.circle(200, 100, 20, ball_options)
	World.add(world, ball)




	Engine.run(engine);

	function keyPressed() {
		if (keyCode === UP_ARROW) {
			Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: .05, y: 0 })
		}
	}
}


function draw() {
	rectMode(CENTER);
	background(0);
	groundObj.display();
	
	//leftSide = new ground(1100, 600, 20, 120);




	drawSprites();

}



