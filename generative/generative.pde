void setup() {
  surface.setSize(800, 500);
  background(255);
}

float[][] array = new float[300][7];
int order = 0;

void draw() {
  setup();
  float red = random(255);
  float green = random(255);
  float blue = random(255);
  float opacity = random(255);
  float x = mouseX + random(80);
  float y = mouseY + random(80);
  float size = random(100);
  
  fill(red, green, blue, opacity);
  noStroke();
  ellipse(x, y, size, size);
  
  float[] args = {red, green, blue, opacity, x, y, size};
  array[order] = args;
  
  for(int i = 0; i < 300; i ++){
    fill(array[i][0], array[i][1], array[i][2], array[i][3]);
    noStroke();
    ellipse(array[i][4], array[i][5], array[i][6], array[i][6]);
    array[i][5] += random(5);
  }
  order += 1;
  if(order == 300){
    order = 0;
  }
}
