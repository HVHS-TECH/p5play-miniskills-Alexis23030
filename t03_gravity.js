/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, (windowHeight - 10));
	world.gravity.y = 10;
	world.gravity.x = 0;
	cam = new Sprite(150, 150, 50, 50, 'd');
	cam.color = '#FF0000';
	cam.rotationSpeed = 2;
	cam.vel.x = 2;
	cam.vel.y = 1;
	jac = new Sprite(500, 150, 50, 50, 's');
	jac.color = '#2600ff';
	jac.rotationSpeed = 2;
	jac.vel.x = 1;
	jac.vel.y = 2;
	tom = new Sprite(150, 500, 50, 50, 'k');
	tom.color = '#2600ff';
	tom.rotationSpeed = 2;
	tom.vel.x = 1;
	tom.vel.y = 2;
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