/**
 * Created by agnieszkacieslawska on 06.12.15.
 */

$(document).ready( function() {

    var z = 100;

    $('#moveM').mousemove( function() {
        console.log('DZIALA');


        if (z == 0) {
            $('#pole').html('<h4>Formularz odblokowany</h4>');
            $('#przycisk').removeAttr('disabled');

        } else {
            $('#pole').html(z -= 1);
            $('.mmwidth').width(z+'%');
        }
    });

});

if (z == 0) {
    document.getElementById("pole").innerHTML = 'Formularz odblokowany';
    document.getElementById("przycisk").removeAttribute("disabled");
} else {
    document.getElementById("pole").innerHTML = z -= 1;
}

$(document).ready(function(){
    $(window).scroll(function() {
        if(($(this).scrollTop()> 50)){
            $('header').addClass('naglowek-strony');
        } else {
            $('header').removeClass('naglowek-strony');
        }
    })

});

    $('.scrollup').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 600)

    })

});

    if (z == 0) {
        document.getElementById("pole").innerHTML = 'Formularz odblokowany';
        document.getElementById("przycisk").removeAttribute("disabled");
    } else {
        document.getElementById("pole").innerHTML = z -= 1;
}

$(document).ready(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 200) {
         $('.scrollup').fadeIn();
        }else{
            $('.scrollup').fadeOut();
        }
});

});

//$(document).ready(function(){
//       if($(this).scrollTop() > 50) {
//           $('header').addClass('naglowek-strony');
//           $('header').removeClass('naglowek-strony-bez-tla');
//       }else{
//           $('header').addClass('naglowek-strony-bez-tla');
//           $('header').removeClass('naglowek-strony');
//
//       }
//    })
//
//});







//(function() {
//
//    function createButton() {
//
//        var button = document.createElement("button");
//
//        button.classList.add("backToTop", "hidden");
//        //button.textContent = "Powrót do góry";
//        document.body.appendChild(button);
//
//        return button;
//
//    }
//
//    var button = createButton();
//
//    function animateScroll() {
//
//        if(document.body.scrollTop > 0) {
//            window.scrollBy(0, -5);
//            setTimeout(animateScroll, 3);
//        }
//    }
//
//    button.addEventListener("click", function(e){
//
//        e.stopPropagation();
//
//        animateScroll();
//
//    }, false);
//
//    window.addEventListener("scroll", function(e){
//
//        if(document.body.scrollTop >= 400) {
//            button.classList.remove("hidden");
//        }else {
//            button.classList.add("hidden");
//        }
//
//    }, false);
//
//})();