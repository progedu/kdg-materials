import processing.serial.*;
Serial microbit;

int x, y, game;
int[][] hit = new int[5][5];

void setup() {
  surface.setSize(500, 500);

  microbit = new Serial(this, Serial.list()[1], 115200);
  microbit.bufferUntil(10);
}

void draw() {
  strokeWeight(2);
  stroke(249,166,3);
  for(int i = 0; i < 5; i ++){
    for(int j = 0; j < 5; j ++){
      if(i == x && j == y){
        fill(242,92,4);
      }
      else if(hit[i][j] == 1){
        fill(249,166,3);    
      }
      else{
        fill(255);
      }
      rect(i * 100, j * 100, 100, 100);
    }
  }
  if(game == 1){
    fill(0);
    textSize(40);
    textAlign(CENTER);
    text("GAME OVER...", 100, 230, 300, 100);
  }
  else if(game == 2){
    fill(247,0,37);
    textSize(40);
    textAlign(CENTER);
    text("GAME CLEAR!!", 100, 230, 300, 50);
  }
}

void serialEvent(Serial microbit) {
  String str = microbit.readStringUntil('\n');
  String[] info = str.split("");
  x = int(info[0]);
  y = int(info[1]);
  game = int(info[2]);
  hit[x][y] = 1;
}
