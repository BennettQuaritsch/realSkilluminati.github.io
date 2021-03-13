var anniversaryDate = Date.parse("17 October 2020");

var currentDate = Date.now();
    var time = (currentDate - anniversaryDate) / 1000;
    var time = Math.round(time);
    document.getElementById("seconds").innerHTML = String(time);

setInterval(getSeconds,1000);

function getSeconds() {
    var currentDate = Date.now();
    var time = (currentDate - anniversaryDate) / 1000;
    var time = Math.round(time);
    document.getElementById("seconds").innerHTML = String(time);
}



