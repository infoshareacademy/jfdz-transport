
$(window).scroll(function(){
   var wScroll = $(this).scrollTop();

    if (wScroll > 100) {
        $('.wel').css({
            'transform' : 'translate(0px, 300px)',
            'transition' : 'all 2s'
        });
    } else {
        $('.wel').css({
            'transform' : 'translate(0px, 0px)',
            'transition' : 'all 2s'
        });
    }

});


$(document).ready( function() {

    var z = 100;

    $('#moveM').mousemove( function() {
        console.log('DZIALA');


        if (z == 0) {
            $('#pole').html('<h4>Formularz odblokowany</h4>');
            $('#przycisk').removeAttr('disabled');

        } else {
            $('#pole').html(z -= 1*10);
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
    $(window).scroll(onScroll);

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav a').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    }
});



//
//        nav.find('a').on('click', function(){
//            var $el = $(this),
//                id = $el.attr('href');
//
//            $('html, body').animate({
//                scrollTop: $(id).offset().top - navHeight
//            }, 400);
//
//            return false;
//
//        })
//    })
//});
































