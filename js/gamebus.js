

$(document).ready( function() {

    var losPrzystanku = Math.round(Math.random()*2);

    var bs1 = $('#busstop1');
    var bs2 = $('#busstop2');
    var bs3 = $('#busstop3');

    var czas = Math.round(Math.random()*5);

    var pkt = 0;


    setInterval( function odliczanie() {
        if (czas>0) {
            czas--;
            console.log(czas);
        } else {
            $('.przystanek').off('click');
            $('#punkty').html('Koniec! - Zdobyłeś punktów: '+pkt);
        }
          return;
        },1000);



    if (losPrzystanku == 0)
    {
        bs1.addClass('aktywny');
        $('.aktywny').click(function () {
            pkt++;
            $('#busstop1 h2').html('Pasażerowie: '+pkt);
            return;
        });

        bs2.click(function () {
           $(this).html('nie ten autobus');
        });
        bs3.click(function () {
            $(this).html('nie ten autobus');
        });




    } else if (losPrzystanku == 1) {

        bs2.addClass('aktywny');
        $('.aktywny').click(function () {
            pkt++;
            $('#busstop2 h2').html('Pasażerowie: '+pkt);
            return;
        });

        bs1.click(function () {
            $(this).html('nie ten autobus');
        });
        bs3.click(function () {
            $(this).html('nie ten autobus');
        });

    } else {

        bs3.addClass('aktywny');
        $('.aktywny').click(function () {
            pkt++;
            $('#busstop3 h2').html('Pasażerowie: '+pkt);
            return;
        });

        bs1.click(function () {
            $(this).html('nie ten autobus');
        });
        bs2.click(function () {
            $(this).html('nie ten autobus');
        });

    }

});


