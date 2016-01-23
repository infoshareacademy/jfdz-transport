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

(function() {

    function createButton() {

        var button = document.createElement("button");

        button.classList.add("backToTop", "hidden");
        //button.textContent = "Powrót do góry";
        document.body.appendChild(button);

        return button;

    }

    var button = createButton();

    function animateScroll() {

        if(document.body.scrollTop > 0) {
            window.scrollBy(0, -5);
            setTimeout(animateScroll, 3);
        }
    }

    button.addEventListener("click", function(e){

        e.stopPropagation();

        animateScroll();

    }, false);

    window.addEventListener("scroll", function(e){

        if(document.body.scrollTop >= 400) {
            button.classList.remove("hidden");
        }else {
            button.classList.add("hidden");
        }

    }, false);

})();