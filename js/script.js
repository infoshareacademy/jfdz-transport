

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
        if($(this).scrollTop()> 50){
            $('header').addClass('naglowek-strony');
        } else {
            $('header').removeClass('naglowek-strony');
        }
    })

});

$(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop()> 300) {
          $('nav a').addClass('color-scroll-down');
      }else {
          $('nav a').removeClass('color-scroll-down');

      }

    })
});


































