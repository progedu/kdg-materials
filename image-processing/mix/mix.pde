PImage bg;
PImage normal;
PImage grayscale;
PImage mosaic;

void setup() {
  bg = loadImage("bg.jpg");
  surface.setSize(bg.width, bg.height);
  normal = loadImage("normal.jpg");
  normal.resize(150, 160);
  grayscale = loadImage("grayscale.jpg");
  grayscale.resize(150, 160);
  mosaic = loadImage("mosaic.jpg"); 
  mosaic.resize(150, 160);
}

void draw(){
  background(bg);
  image(grayscale, 246, 136);
  
  translate(60, 133);
  rotate(radians(3));
  image(normal, 0, 0);
  
  rotate(radians(-3));
  
  translate(374, -9);
  rotate(radians(-4));
  image(mosaic, 0,0);
  
  save("mix.jpg");
}
