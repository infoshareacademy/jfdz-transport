/**
 * Created by agnieszkacieslawska on 21.02.16.
 */


//    //smoothscroll
//    $('a[href^="#"]').on('click', function (e) {
//        e.preventDefault();
//        $(document).off("scroll");
//
//        $('a').each(function () {
//            $(this).removeClass('active');
//        })
//        $(this).addClass('active');
//
//        var target = this.hash,
//            menu = target;
//        $target = $(target);
//        $('html, body').stop().animate({
//            'scrollTop': $target.offset().top+2
//        }, 500, 'swing', function () {
//            window.location.hash = target;
//            $(document).on("scroll", onScroll);
//        });
//    });
//});


    $(document).ready(function () {
        $(document).on("scroll", onScroll);

    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('#menu-active a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu-active ul li a').removeClass("active");
                currLink.addClass("active");
            }
        });
    }