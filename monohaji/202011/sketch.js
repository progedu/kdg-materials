var momiji;
var ityou;
var index = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	momiji=loadImage("momiji.png");
	ityou=loadImage("ityou.png");
}

function draw() {
	var mX =  random(windowWidth);
	var mY =  random(windowHeight);
	var mSize =  random(100);
	var iX =  random(windowWidth);
	var iY =  random(windowHeight);
	var iSize =  random(100);

	image(momiji, mX, mY, mSize, mSize);
	image(ityou, iX, iY, iSize, iSize);

	index += 1;
	if(index == 80){
		noLoop();
	}
}
