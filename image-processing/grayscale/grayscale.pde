PImage img;

void setup() {
  img = loadImage("sample.jpg");
  surface.setSize(img.width, img.height);
}

void draw(){
  for(int x = 0; x < img.width; x++){
     for(int y = 0; y < img.height; y++){
        float r = red(img.get(x, y));
        float g = green(img.get(x, y));
        float b = blue(img.get(x, y));
        float c = (r + g + b) / 3;
        img.set(x, y, color(c, c, c));
    }
  }
  image(img, 0, 0);
  save("grayscale.jpg");
}
