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

$(document).ready(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
        }else{
            $('.scrollup').fadeOut();
        }

    })

    $('.scrollup').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 600)

    })

});

$(document).ready(function(){
    $(window).scroll(function() {
        if(($(this).scrollTop()> 50)){
            $('header').addClass('naglowek-strony');
        } else {
            $('header').removeClass('naglowek-strony');
        }
    })

});