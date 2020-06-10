var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var w = canvas.width;
var h = canvas.height;
var id = setInterval(draw, 10);

var time = 60;
var count = 0;

var playerX = w / 2;
var playerY = h / 2;

var enemyX = [0, w / 2 - 50, w - 100];
var enemyY = [h /2 - 50, 0, h / 2 - 50];

var itemX = [0, 0, 0];
var itemY = [0, 0, 0];

var enemyInitialX = [0, w / 2 - 50, w - 100];
var enemyInitialY = [h /2 - 50, 0, h / 2 - 50];

function draw(){
  ctx.fillStyle = "#FAEFD4";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#662E1C";
  ctx.fillRect(0, 0, w / 2 - 50, 100);
  ctx.fillRect(w / 2 + 50, 0, w / 2 - 50, 100);
  ctx.fillRect(0, 0, 100, h / 2 - 50);
  ctx.fillRect(0, h / 2 + 50, 100, h / 2 - 50);
  ctx.fillRect(w - 100, 0, 100, h / 2 - 50);
  ctx.fillRect(w - 100, h / 2 + 50, 100, h / 2 - 50);
  
  if(count % 100 == 0){
    time -= 1;
  }

  ctx.font = "30px 'ＭＳ ゴシック'";
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("残り時間：" + time, 50, 50);

  var player = new Image();
  player.src = "image/player.png";
  ctx.drawImage(player, playerX, playerY, 100, 100);

  for(var i = 0; i < 3; i ++){
    var enemy = new Image();
    var enemyPath = "image/enemy" + (i + 1) + ".png";
    enemy.src = enemyPath;
    ctx.drawImage(enemy, enemyX[i], enemyY[i], 100, 100);

    if(i > Math.floor((60 - time) / 20)){
      continue;
    }
    var tilt = (playerY - enemyY[i]) / (playerX - enemyX[i]);
    var x = Math.sqrt(1 / (1 + tilt * tilt));
    if(playerX > enemyX[i]){
      enemyX[i] += x;
      enemyY[i] += tilt * x;
    }
    else{
      enemyX[i] -= x;
      enemyY[i] -= tilt * x;
    }

    if(enemyY[i] > playerY - 50 && enemyY[i] < playerY + 50 &&
       enemyX[i] > playerX - 50 && enemyX[i] < playerX + 50){
        ctx.font = "50px 'ＭＳ ゴシック'";
        ctx.fillStyle = "#EA5549";
        ctx.fillText("GAME OVER...", w / 2 - 150, h / 2);
        clearInterval(id);
    }
  }

  for(var i = 0; i < 3; i ++){
    var item = new Image();
    var itemPath = "image/item" + (i + 1) + ".png";
    item.src = itemPath;
    ctx.drawImage(item, itemX[i], itemY[i], 50, 50);
    if(count % 500 == 0){
      itemX[i] = Math.random() * ( w - 300 ) + 100;
      itemY[i] = Math.random() * ( h - 200 ) + 100;
    }
    if(itemY[i] > playerY - 25 && itemY[i] < playerY + 50 &&
       itemX[i] > playerX - 25 && itemX[i] < playerX + 50){
        enemyX[i] = enemyInitialX[i];
        enemyY[i] = enemyInitialY[i];
        itemX[i] = -100;
        itemY[i] = -100;
    }
  }
  if(time == 0){
    ctx.font = "50px 'ＭＳ ゴシック'";
    ctx.fillStyle = "#333333";
    ctx.fillText("GAME CLEAR！", w / 2 - 150, h / 2);
    clearInterval(id);
  }
  count += 1;
}

document.onkeydown = keydown;
function keydown(e){
  if(e.which == 37 && playerX > 100){
    playerX -= 20;
  }
  else if(e.which == 38 && playerY > 100){
    playerY -= 20;
  }
  else if(e.which == 39 && playerX < w - 200){
    playerX += 20;
  }
  else if(e.which == 40 && playerY < h - 100){
    playerY += 20;
  }
}