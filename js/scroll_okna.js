/**
 * Created by agniecha on 2016-02-16.
 */


$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
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
    //if (wScroll > $('.features-container').offset().top -
    //    $(window).height()) {
    //    var offset = Math.min(0, wScroll -
    //        $('.features-container').offset().top + $(window).height() - 100);
    //    $('.menu-glowne li').css({
    //        'margin-left': '10px' });
    //
    //}
});