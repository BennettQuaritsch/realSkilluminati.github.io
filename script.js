var cursor = document.getElementById("cursor");

window.onload = blink();

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
   }

async function blink() {

    
    while (true) {
        document.getElementById("cursor").style.visibility = "visible";

        await Sleep(700);

        document.getElementById("cursor").style.visibility = "hidden";

        await Sleep(500);
    }

    
}