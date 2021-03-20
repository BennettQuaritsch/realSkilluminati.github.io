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

var messageArray = ["Ich liebe dich ❤️", "Du bist heiß ❤️", "Du bist schlau ❤️", "Du bist hübsch ❤️", "Du bist besonders ❤️", "Du bist kinky ❤️", "Du bist süß ❤️", "Du bist verdammt süß, wenn du schläfst ❤️", "Du liebst mich ❤️"];

function motivationMessage() {
    var message = messageArray[Math.floor(Math.random() * messageArray.length)]
    alert(message);
}



