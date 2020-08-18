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

    var popUpMenu = document.getElementsByClassName("mobilePopUpMenu");

    var header = document.getElementById("header");

    if (clicked == false) {
        menubarSpan.style.boxShadow = "0 5px 30px rgba(0, 0, 0, 0.35)";
        clicked = true;
        
        for ( i = 0 ; i < popUpMenu.length; i++) {
            popUpMenu[i].style.display = "inline";
            header.style.justifyContent = "space-around";
            //header.style.height = "auto";
        }

    }
    else {
        menubarSpan.style.boxShadow = "none";
        clicked = false;

        for ( i = 0 ; i < popUpMenu.length; i++) {
            popUpMenu[i].style.display = "none";
            header.style.justifyContent = "space-between";
            header.style.height = "auto";
        }
    }
}