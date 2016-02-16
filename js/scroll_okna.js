/**
 * Created by agniecha on 2016-02-16.
 */


    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
console.log(wScroll);
        $('.welcome img').css({
            'transform': 'translate(0px, '+ wScroll/10+ '%)'
        });
        $('.slogan h1').css({
            'transform': 'translate(0px, '+ wScroll/6+ '%)'
        }); $('.slogan p').css({
            'transform': 'translate(0px, '+ wScroll/4+ '%)'
        });
});
