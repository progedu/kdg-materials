var roulette;
function start(){
    var result = document.getElementById("result");
    var omikuji = ["大吉", "中吉", "小吉", "凶"];
    roulette = setInterval(function(){
        var random = Math.round(Math.random() * (omikuji.length - 1));
        result.innerHTML = omikuji[random];
    }, 10);
}

function stop(){
    clearInterval(roulette);
}