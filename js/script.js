

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

//$(document).ready(function(){
//
//    var home = $('#home').offset().top;
//    var form = $('#form').offset().top;
//    console.log(form);
//
//    $(window).scroll(function(){
//      if($(this).scrollTop()> 300) {
//          $('nav a').addClass('activeNav');
//      }else {
//          $('nav a').removeClass('activeNav');
//
//      }
//
//    })
//});

$(document).ready(function(){
    var article = $('article'),
        nav = $('nav'),
        navHeight = nav.outerHeight();

        //console.log(navHeight);

    $(window).on('scroll', function() {
        var currentPosition = $(this).scrollTop();

        //console.log(currentPosition);

        article.each(function(){
            var top = $(this).offset().top - navHeight,
                bottom = top + $(this).outerHeight();

            //console.log(top);
            //console.log(bottom);

            if (currentPosition >= top && currentPosition <= bottom) {
                nav.find('a').removeClass('activeNav');
                article.removeClass('activeNav');

                $(this).addClass('activeNav');
                nav.find('a[href="#]'+$(this).attr('id')+'"]').addClass('activeNav');
            }

        })
    })


});

































