var order = 0;
var flag = 0;
var squares = [["", "", ""], ["", "", ""], ["", "", ""]];
var win = [['00', '01', '02'], ['10', '11', '12'], ['20', '21', '22'],
            ['00', '10', '20'],['01', '11', '21'], ['02', '12', '22'],
            ['00', '11', '22'], ['02', '11', '20']];

function game(input){
  var cell = document.getElementById(input);
  var info = document.getElementById("info");

  if(flag == 1 || squares[input.charAt(0)][input.charAt(1)] != ""){
    alert("もうクリックできません！");
    exit;
  }

  if(order % 2 == 0){
    cell.innerHTML = "◯";
    squares[input.charAt(0)][input.charAt(1)] = "◯";
  }
  else{
    cell.innerHTML = "×";
    squares[input.charAt(0)][input.charAt(1)] = "×";
  }

  for(var i = 0; i < win.length; i++){
    var cell1 = squares[win[i][0].charAt(0)][win[i][0].charAt(1)];
    var cell2 = squares[win[i][1].charAt(0)][win[i][1].charAt(1)];
    var cell3 = squares[win[i][2].charAt(0)][win[i][2].charAt(1)];
    if(cell1 == "◯" && cell2 == "◯" && cell3 =="◯"){
      info.innerHTML = "◯の勝ち！";
      flag = 1;
      break;
    }
    else if(cell1 == "×" && cell2 == "×" && cell3 =="×"){
      info.innerHTML = "×の勝ち！";
      flag = 1;
      break;
    }
    else{
      ;
    }
  }

  order += 1;

  if(flag == 0){
    if(order == 9){
      info.innerHTML = "引き分け！";
    }
    else if(order % 2 == 0){
      info.innerHTML = "◯の番！";
    }
    else{
      info.innerHTML = "×の番！";
    }
  }
}

function reset(){
  location.reload();
}
