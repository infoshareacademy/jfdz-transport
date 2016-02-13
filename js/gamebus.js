

$(document).ready( function() {

    var losPrzystanku = Math.round(Math.random()*2);

    if (losPrzystanku == 0)
    {
        var pkt = 0;
        var bs1 = $('#busstop1');
        var czas = Math.round(Math.random()*20);
        bs1.addClass('aktywny');
        $('.aktywny').click(function () {
            pkt++;
            $('#busstop1 h2').html('Pasażerowie: '+pkt);
            console.log(czas);
            if (czas>0) {
                czas--;
            } else {
                bs1.off('click');
                $('h3').html('Koniec!');
            }
            return;
        });
    } else if (losPrzystanku == 1) {

        var pkt = 0;
        var bs2 = $('#busstop2');
        var czas = Math.round(Math.random()*20);
        bs2.addClass('aktywny');
        $('.aktywny').click(function () {
            pkt++;
            $('#busstop2 h2').html('Pasażerowie: '+pkt);
            console.log(czas);
            if (czas>0) {
                czas--;
            } else {
                bs2.off('click');
                $('h3').html('Koniec!');
            }
            return;
        });

    } else {

        var pkt = 0;
        var bs3 = $('#busstop3');
        var czas = Math.round(Math.random()*20);
        bs3.addClass('aktywny');
        $('.aktywny').click(function () {
            pkt++;
            $('#busstop3 h2').html('Pasażerowie: '+pkt);
            console.log(czas);
            if (czas>0) {
                czas--;
            } else {
                bs3.off('click');
                $('h3').html('Koniec!');
            }
            return;
        });

    }

});


