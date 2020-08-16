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