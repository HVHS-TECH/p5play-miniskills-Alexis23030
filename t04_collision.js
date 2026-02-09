/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, (windowHeight - 10));
	world.gravity.y = 10;

	cam = new Sprite(200, 200, 50, 'd');
	cam.color = '#FF0000';
	cam.rotationSpeed = 2;
	cam.vel.x = 2;
	cam.vel.y = 1;
	cam.bounciness = 2;
	cam.friction = 1;
	cam.drag = 0.5;


	tom = new Sprite(150, 150, 50, 'd');
	tom.color = '#FF0000';
	tom.rotationSpeed = 2;
	tom.vel.x = 2;
	tom.vel.y = 1;
	tom.bounciness = 1.2;
	tom.friction = 1;
	tom.drag = 0.5;

	platform_1 = new Sprite(300, 300, 200, 10, 'k');
	platform_2 = new Sprite(600, 600, 200, 10, 'k');

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#ffffff');
}

/*******************************************************/
//  END OF APP
/*******************************************************/