
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

    $('#moveM').mousemove(function () {
        console.log('DZIALA');


        if (z == 0) {
            $('#pole').html('<h4>Formularz odblokowany</h4>');
            $('#przycisk').removeAttr('disabled');

        } else {
            $('#pole').html(z -= 1 * 10);
            $('.mmwidth').width(z + '%');
        }
    });

    $(document).on("scroll", onScroll);

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('#menu-active a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu-active ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    }

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 200, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });


    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }

        })

        $('.scrollup').click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 600)

        })

    });

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('header').addClass('naglowek-strony');
            } else {
                $('header').removeClass('naglowek-strony');
            }
        });

    });
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

//$(document).ready(function(){
//    var article = $('article'),
//        nav = $('nav'),
//        navHeight = nav.outerHeight();
//
//        //console.log(navHeight);
//
//    $(window).on('scroll', function() {
//        var currentPosition = $(this).scrollTop();
//
//        //console.log(currentPosition);
//
//        article.each(function(){
//            var top = $(this).offset().top - navHeight,
//                bottom = top + $(this).outerHeight();
//
//            //console.log(top);
//            //console.log(bottom);
//
//            if (currentPosition >= top && currentPosition <= bottom) {
//                nav.find('a').removeClass('activeNav');
//                article.removeClass('activeNav');
//
//                //$(this).addClass('activeNav');
//                //nav.find('a[href="#]'+$(this).attr('id')+'"]').addClass('activeNav');
//                var currentNav = nav.find('a[href^=#]');
//                console.log(currentNav);
//
//                var currentArticle = $(this).attr('id');
//                console.log(currentArticle);
//                if (currentNav == currentArticle) {
//                    currentNav.addClass('activeNav');
//                }
//
//
//            }
//
//        });
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
































