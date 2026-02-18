/*******************************************************/
// P5.play: Game
// Game
// Written by Alexis
/*******************************************************/


let direction = 1;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight-10);
    windowDraw();
    

	world.gravity.y = 0;
	world.gravity.x = 0;

	player = new Sprite(150, 800, 50, 50, 'd');
	player.color = '#2600ff';
	player.vel.x = direction * 4;
	player.vel.y = 0;
	player.collides(wallGroup, removePlayer);
}


/*******************************************************/
// windowDraw()
/*******************************************************/
function windowDraw(){
	wallGroup = new Group();
	wallLH  = new Sprite(0, windowHeight/2, 8, windowHeight, 'k');
	wallLH.color = 'black';
  	wallGroup.add(wallLH);
	wallRH  = new Sprite(windowWidth, windowHeight/2, 8, windowHeight, 'k');
	wallRH.color = 'black';
  	wallGroup.add(wallRH);
	wallTop = new Sprite(windowWidth/2, 0, windowWidth, 8, 'k');
	wallTop.color = 'black';
  	wallGroup.add(wallTop);
	wallBot = new Sprite(windowWidth/2, windowHeight, windowWidth, 8, 'k');
	wallBot.color = 'black';
  	wallGroup.add(wallBot);
}


/*******************************************************/
// removePlayer()
/*******************************************************/
function removePlayer(_player, _wallGroup) {
    direction = direction * -1
    _player.vel.x = 4 * direction;
}


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#ffffff');
    player.vel.x = direction * 4

if (kb.presses('left')) {
    direction= -1;
}
else if (kb.presses('right')) {
    direction = 1;
};

} 

/*******************************************************/
//  END OF APP
/*******************************************************/