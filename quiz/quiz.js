var order = 0;
var correct = 0;
var quiz = [
  ["山の日はいつ？", "8月1日", "8月11日", "8月21日", "8月31日", 2],
  ["文化の日はいつ？", "10月3日", "11月3日", "12月3日", "1月3日", 2],
  ["勤労感謝の日はいつ？", "11月13日", "11月15日", "11月23日", "11月25日", 3],
  ["こどもの日はいつ？", "1月1日", "3月3日", "5月5日", "7月7日", 3]
];

function set(){
  var order_area = document.getElementById("order");
  var question = document.getElementById("question");
  var answer1 = document.getElementById("answer1");
  var answer2 = document.getElementById("answer2");
  var answer3 = document.getElementById("answer3");
  var answer4 = document.getElementById("answer4");

  order_area.innerHTML = "【第" + (order + 1) + "問】";
  question.innerHTML = quiz[order][0];
  answer1.innerHTML = quiz[order][1];
  answer2.innerHTML = quiz[order][2];
  answer3.innerHTML = quiz[order][3];
  answer4.innerHTML = quiz[order][4];
}

function judge(num){
  var result = document.getElementById("result");
  var answer = quiz[order][5];
  if(answer == num){
    correct += 1;
    result.innerHTML = "正解！";
  }
  else{
    result.innerHTML = "不正解...";
  }
  order += 1;
  if(order == quiz.length){
    result.innerHTML += "<br>" + quiz.length + "問中" + correct + "問正解！お疲れ様でした";
  }
  else{
    set();
  }
}
