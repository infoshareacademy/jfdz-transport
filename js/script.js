/**
 * Created by agnieszkacieslawska on 06.12.15.
 */

var z = 100;
function moveMouse() {

    if (z == 0) {
        document.getElementById("pole").innerHTML = 'Formularz odblokowany';
        document.getElementById("przycisk").removeAttribute("disabled");
    } else {
        document.getElementById("pole").innerHTML = z -= 1;
    }
}