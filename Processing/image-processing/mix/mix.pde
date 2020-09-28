PImage bg;
PImage normal;
PImage grayscale;
PImage mosaic;

void setup() {
  bg = loadImage("bg.png");
  surface.setSize(bg.width, bg.height);
  normal = loadImage("normal.jpg");
  normal.resize(150, 150);
  grayscale = loadImage("grayscale.jpg");
  grayscale.resize(150, 150);
  mosaic = loadImage("mosaic.jpg"); 
  mosaic.resize(150, 150);
}

void draw(){
  background(bg);
  image(grayscale, 310, 240);
  
  translate(75, 140);
  rotate(radians(-10));
  image(normal, 0, 0);
  
  rotate(radians(10));
  
  translate(470, -45);
  rotate(radians(10));
  image(mosaic, 0,0);
  
  save("mix.jpg");
}
