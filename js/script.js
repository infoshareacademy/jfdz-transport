
$(window).scroll(function(){
   var wScroll = $(this).scrollTop();

    if (wScroll > 100) {
        $('.wel').css({
            'transform' : 'translate(0px, 100px)',
            'transition' : 'all 2s ease-out'
        });
    } else {
        $('.wel').css({
            'transform' : 'translate(0px, 0px)',
            'transition' : 'all 2s ease-out'
        });
    }

});



$(document).ready( function() {

    var z = 100;

    $('#moveM').mousemove( function() {

        if (z == 0) {
            $('#pole').html('<h4>Formularz odblokowany</h4>');
            $('#przycisk').removeAttr('disabled');

        } else {
            $('#pole').html(z -= 1*10);
            $('.mmwidth').width(z+'%');
        }
    });

});

function getGETParameter(key)
{
    key = key.replace(/[[]/, "[").replace(/[]]/, "]");
    var regexS = "[?&]" + key + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if(results == null){
        return "";
    }
    else{
        return decodeURIComponent(results[1].replace('/+/g', " "));
    }
}

var status = getGETParameter("mailerResult");

if (status == 'sent') {
    $('#forms').hide();
    $('#status').show();
}


//sent - prawidłowo wysłano e-mail
//calledFromInvalidAddress - próba wywołania skryptu wysyłającego z niedozwolonego adresu
//missingReceiver - nie podano adresu do wysyłki
//unknownError - inny błąd



$(document).ready(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
        }else{
            $('.scrollup').fadeOut();
        }

    });

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
            $('.menu-glowne li').css({'margin-left': '10px', 'transition':'0.3s'});
        } else {
            $('header').removeClass('naglowek-strony');
            $('.menu-glowne li').css({'margin-left': '50px','transition':'0.3s'});
        }
    })

});


$(document).ready(function(){
    $(window).scroll(onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 400, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos-1 && refElement.position().top + refElement.height() > scrollPos) {
                $('nav a').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    }
});

/**
 * Created by agniecha on 2016-02-16.
 */


$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $('.welcome img').css({
        'transform': 'translate(0px, ' + wScroll / 20 + '%)'
    });
    $('.slogan').css({
        'transform': 'translate(0px, ' + wScroll / 20 + '%)'
    });
    //$('.slogan p').css({
    //    'transform': 'translate(0px, '+ wScroll/4+ '%)'
    //});

    if (wScroll > $('.features-container').offset().top -
        $(window).height()) {
        var offset = Math.min(0, wScroll -
            $('.features-container').offset().top + $(window).height() - 200);
        $('.feature-image-1').css({
            'transform': 'translate(-' +
            Math.abs(offset) + 'px ,' + 0 + 'px)'
        });
        $('.feature-image-3').css({
            'transform': 'translate(' +
            Math.abs(offset) + 'px ,' + 0 + 'px)'
        });
    }
});




































