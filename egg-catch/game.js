var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var id = setInterval(draw, 10);
var playerX = 350;
var itemX = Math.random() * 700;
var itemY = -100;
var random = Math.round(Math.random());
var score = 0;

function draw(){
  var flag = 0;

  ctx.fillStyle = "#B8E2FC";
  ctx.fillRect(0, 0, 800, 300);

  ctx.fillStyle = "#A1CA52";
  ctx.fillRect(0, 300, 800, 100);

  for(var i = 0; i < 4; i++){
    var cloud = new Image();
    cloud.src = "image/cloud.png";
    ctx.drawImage(cloud, 20 + i * 200, 50, 150, 60);
  }

  var player = new Image();
  player.src = "image/player.png";
  ctx.drawImage(player, playerX, 350, 100, 30);

  var item = new Image();
  if(random == 0){
    item.src = "image/egg.png";
  }
  else{
    item.src = "image/ball.png";
  }
  ctx.drawImage(item, itemX, itemY, 100, 100);

  if(itemY > 250 && playerX < itemX + 100 && playerX > itemX - 100){
    if(random == 0){
      score += 10;
    }
    else{
      score -=10;
    }
    flag = 1;
  }

  itemY ++;
  if(itemY > 400 || flag == 1){
    itemY = -100;
    itemX = Math.random() * 700;
    random = Math.round(Math.random());
  }

  ctx.font = "30px 'ＭＳ ゴシック'";
  ctx.fillStyle = "#333333";
  ctx.fillText("SCORE：" + score, 30, 50);

  if(score == 100){
    ctx.font = "60px 'ＭＳ ゴシック'";
    ctx.fillStyle = "#333333";
    ctx.fillText("GAME CLEAR！", 200, 200);
    clearInterval(id);
  }
}

document.onkeydown = keydown;
function keydown(e){
  if(e.key=="a"){
    playerX -= 30;
  }
  else if(e.key=="l"){
    playerX += 30;
  }
}

function reset(){
  location.reload();
}