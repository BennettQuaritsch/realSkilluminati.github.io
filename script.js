function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
   }

async function blink() {

    var cursor = document.getElementById("cursor");

    while (true) {
        //document.getElementById("cursor").style.visibility = "visible";
        cursor.style.visibility = "visible";

        await Sleep(700);

        cursor.style.visibility = "hidden";

        await Sleep(500);
    }

    
}
var clicked = false;

function menuClick() {
    var menubarSpan = document.getElementById("menubarSpan");

    if (clicked == false) {
        menubarSpan.style.boxShadow = "0 5px 30px rgba(0, 0, 0, 0.35)";
        clicked = true;
    }
    else {
        menubarSpan.style.boxShadow = "none";
        clicked = false;
    }
}