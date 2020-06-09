PImage bg;
PImage sample;

void setup() {
  bg = loadImage("bg.jpg");
  sample = loadImage("sample.jpg");
  sample.resize(470, 230);
  surface.setSize(bg.width, bg.height);
}

void draw() {
  background(bg);
  image(sample, 180, 130);
  save("memory.jpg");
}
