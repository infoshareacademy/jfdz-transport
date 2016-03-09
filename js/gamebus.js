$(document).ready(function () {

    var losStop = Math.round(Math.random() * 2);

    var bs1 = $('#busstop1');
    var bs2 = $('#busstop2');
    var bs3 = $('#busstop3');

    var czas = Math.round(Math.random() * 5);

    var pkt = 0;

    var przystanek = {
        bus: false,
        stop: losStop,
        stopbus: function() {
            var los = Math.round(Math.random() * 1);
            if (los == 1) {
                this.bus = true;
                this.stop;
                console.log(los);
                console.log(this.stop);
                var bs = '#busstop'+this.stop;
                $(bs).addClass('aktywny');
                $(bs+' h2').html('Przyjechał autobus, kliknij i załaduj pasażerów ;)')
            } else {
                console.log(los);
                $(bs+' h2').html('Czekaj na swój autobus')
            }
        }
    };

    przystanek.stopbus();

    var autobus1 = {
        linia: 1,
        cel: 'Wały Jagielońskie',
        dobry: false,
        drzwi: false,
        jedzie: true
    };

    var autobus2 = {
        linia: 4,
        cel: 'Olivia Business Center',
        dobry: true,
        drzwi: false,
        jedzie: true
    };

    var autobus3 = {
        linia: 10,
        cel: 'Stare Miasto',
        dobry: false,
        drzwi: false,
        jedzie: true
    };

    function bus() {

    }



    //setInterval(function odliczanie() {
    //
    //    if (czas > 0) {
    //        czas--;
    //        console.log(czas);
    //    } else {
    //        $('.przystanek').off('click');
    //        $('#punkty').html('Koniec! - Zdobyłeś punktów: ' + pkt);
    //    }
    //    return;
    //}, 1000);
    //
    //var runda = 1;
    //for (; runda <4; i++ ) {
    //
    //
    //$('#runda').html('Runda: '+runda);
    //
    //
    //if (losPrzystanku == 0) {
    //    bs1.addClass('aktywny');
    //    $('#busstop1 h2').html('Przyjechał autobus, kliknij i załaduj pasażerów ;)')
    //    $('.aktywny').click(function () {
    //        pkt++;
    //        $('#busstop1 h2').html('Pasażerowie: ' + pkt);
    //        return;
    //    });
    //
    //    bs2.click(function () {
    //        $(this).html('Auu! nie ten autobus - straciłeś -10 pkt!');
    //        pkt = pkt - 10;
    //    });
    //    bs3.click(function () {
    //        $(this).html('Auu! nie ten autobus - straciłeś -10 pkt!');
    //        pkt = pkt - 10;
    //    });
    //
    //
    //} else if (losPrzystanku == 1) {
    //
    //    bs2.addClass('aktywny');
    //    $('#busstop2 h2').html('Przyjechał autobus, kliknij i załaduj pasażerów ;)')
    //    $('.aktywny').click(function () {
    //        pkt++;
    //        $('#busstop2 h2').html('Pasażerowie: ' + pkt);
    //        return;
    //    });
    //
    //    bs1.click(function () {
    //        $(this).html('Auu! nie ten autobus - straciłeś -10 pkt!');
    //        pkt = pkt - 10;
    //    });
    //    bs3.click(function () {
    //        $(this).html('Auu! nie ten autobus - straciłeś -10 pkt!');
    //        pkt = pkt - 10;
    //    });
    //
    //} else {
    //
    //    bs3.addClass('aktywny');
    //    $('#busstop3 h2').html('Przyjechał autobus, kliknij i załaduj pasażerów ;)')
    //    $('.aktywny').click(function () {
    //        pkt++;
    //        $('#busstop3 h2').html('Pasażerowie: ' + pkt);
    //        return;
    //    });
    //
    //    bs1.click(function () {
    //        $(this).html('Auu! nie ten autobus - straciłeś -10 pkt!');
    //        pkt = pkt - 10;
    //    });
    //    bs2.click(function () {
    //        $(this).html('Auu! nie ten autobus - straciłeś -10 pkt!');
    //        pkt = pkt - 10;
    //    });
    //
    //}

    //}

});


