/*******************************************************/
// P5.play: t23_text
// Text input
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
	jac = new Sprite(200, 150, 50, 50, 's');
	jac.color = '#2600ff';
	jac.rotationSpeed = 2;
	jac.vel.x = 1;
	jac.vel.y = 2;
	tom = new Sprite(150, 500, 50, 50, 'k');
	tom.color = '#2600ff';
	tom.rotationSpeed = 1;
	tom.vel.x = 0;
	tom.vel.y = 0;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#ffffff');

	cam.moveTowards(mouseX, mouseY, 0.1);
	if (mouse.presses()) {
		cam.moveTo(300, 300, 400);
	}

if (kb.pressing('left')) {
	tom.vel.x = -4;
}
else if (kb.pressing ('right')) {
	tom.vel.x = 4; 
};

if (kb.released('left')) {
	tom.vel.x = 0;
} else if (kb.released ('right')) {
	tom.vel.x = 0;
};



text("Hello World", 50, 50) 
var name = "hiiiii";
text("Hello "+name, 50, 100);
}
/*******************************************************/
//  END OF APP
/*******************************************************/