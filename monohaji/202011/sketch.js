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
	var size = random(100);
	var x =  random(windowWidth);
	var y =  random(windowHeight);
	var deg = random(-90, 90);
	translate(x, y);
	rotate(radians(deg));
	if(index % 4 != 0){
		image(momiji, 0, 0, size, size);
	}
	else{
		image(ityou, 0, 0, size, size);
	}
	rotate(-1 * deg);
	translate(-1 * x, -1 * y);
	index += 1;
	if(index == 150){
		noLoop();
	}
}
