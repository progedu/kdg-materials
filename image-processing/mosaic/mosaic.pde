PImage img;
int mosaicSize = 10;

void setup() {
  img = loadImage("sample.jpg");
  surface.setSize(img.width, img.height);
}

void draw(){
  for(int x = 0; x < img.width; x += mosaicSize){
     for(int y = 0; y < img.height; y += mosaicSize){
        color c = img.get(x, y);
        fill(c);
        noStroke();
        rect(x, y, mosaicSize, mosaicSize);
    }
  }
  save("mosaic.jpg");
}
