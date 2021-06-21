var quiz = [
  ["山の日はいつ？", "8月1日", "8月11日", "8月21日", "8月31日", 2],
  ["文化の日はいつ？", "10月3日", "11月3日", "12月3日", "1月3日", 2],
  ["勤労感謝の日はいつ？", "11月13日", "11月15日", "11月23日", "11月25日", 3],
  ["こどもの日はいつ？", "1月1日", "3月3日", "5月5日", "7月7日", 3]
];
var counter = 0;
var score = 0;
var end = false;

function set(){
  var order = document.getElementById("order");
  var question = document.getElementById("question");
  order.innerHTML = "【第" + (counter + 1) + "問】";
  question.innerHTML = quiz[counter][0];

  for(var i = 1; i < 5; i ++){
    var answer = document.getElementById("answer" + i);
    answer.innerHTML = quiz[counter][i];
  }
}

function judge(num){
  if(end){
    return;
  }
  var result = document.getElementById("result");
  var answer = quiz[counter][5];
  if(answer == num){
    result.innerHTML = "正解！";
    score += 1;
  }
  else{
    result.innerHTML = "不正解...";
  }
  if(counter == quiz.length - 1){
    result.innerHTML += quiz.length + "問中" + score + "問正解！";
    end = true;
  }
  else{
    counter += 1;
    set();
  }
}
