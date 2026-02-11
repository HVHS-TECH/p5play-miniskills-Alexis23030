/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, (windowHeight - 10));
	world.gravity.y = 10;
	windowDraw();

	cam = new Sprite(200, 200, 50, 'd');
	cam.color = '#FF0000';
	cam.rotationSpeed = 2;
	cam.vel.x = 2;
	cam.vel.y = 1;
	cam.bounciness = 1.5;
	cam.friction = 2;
	cam.drag = 0.5;


	tom = new Sprite(150, 150, 50, 'd');
	tom.color = '#FF0000';
	tom.rotationSpeed = 2;
	tom.vel.x = 2;
	tom.vel.y = 1;
	tom.bounciness = 1.2;
	tom.friction = 1;
	tom.drag = 0.5;

	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.color = 'cyan';
	ball_1.vel.x = 2;
	ball_1.bounciness = 1;
	ball_1.friction = 0;
	ball_1.drag = 0;

	platform_1 = new Sprite(600, 300, 200, 10, 'k');
	platform_2 = new Sprite(800, 700, 200, 10, 'k');

	aliens();
	alienGroup.collides(ball_1, removeAlien);
}
	

/*******************************************************/
// windowDraw()
/*******************************************************/
function windowDraw(){
	wallLH  = new Sprite(0, height/2, 8, height, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(width, height/2, 8, height, 'k');
	wallRH.color = 'yellow';
	wallTop = new Sprite(width/2, 0, width, 8, 'k');
	wallTop.color = 'green';
	wallBot = new Sprite(width/2, height, width, 8, 'k');
	wallBot.color = 'blue';
}

/*******************************************************/
// aliens()
/*******************************************************/
function aliens(){
	alienGroup = new Group();
	for (i = 0; i < 10; i++) {
		alien = new Sprite(width/3, height/3, 30, 30, 'd');
		const VELARRAY = [-1, 1];
		randxv = random(4, 7) * random(VELARRAY);
		alien.vel.x = randxv;
		randyv = random(4, 7) * random(VELARRAY);
		alien.vel.y = randyv;
		alien.bounciness = 1;
		alien.friction = 0;
  		alienGroup.add(alien);
	}
}
/*******************************************************/
// removeAlien()
/*******************************************************/
function removeAlien(_ssss, _ball_1) {
// Delete the alien which was hit
_ssss.remove();
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