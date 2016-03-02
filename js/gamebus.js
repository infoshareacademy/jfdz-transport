$(document).ready(function () {

    var losStop = Math.round(Math.random() * 2);

    var bs1 = $('#busstop1');
    var bs2 = $('#busstop2');
    var bs3 = $('#busstop3');

    var czas = Math.round(Math.random() * 10);




    var pkt = 0;

    var czasgry = 20;

    setInterval(function() {
        gameTime()
    }, 1000);

    function gameTime() {
        if (czasgry > 0) {
            czasgry--;
            console.log(czasgry);
        } else {
            clearInterval(gameTime);
        }
    }

    var przystanek0 = {
        bus: false,
        autobus: [[1,-10],[2,-10],[3,1]],
        stop: 0,
        stopbus: function() {

        var los = Math.round(Math.random() * 1);

            sb = this.stop;
            bs = '#busstop'+sb;

            if (czasgry > 0) {
                if (los == 1) {
                    console.log('Los2:'+los);
                    this.bus = true;
                    $(bs).removeClass('out');
                    $(bs).addClass('active');
                    czasgry+2;
                } else {
                    console.log('Los2:'+los);
                    $(bs).removeClass('active');
                    $(bs).addClass('out');
                }
            }
        }
        };

    var przystanek1 = {
        bus: false,
        autobus: [[1,-10],[2,-10],[3,1]],
        stop: 1,
        stopbus: function() {

            var los = Math.round(Math.random() * 1);

            sb = this.stop;
            bs = '#busstop'+sb;

            if (czasgry > 0) {
                if (los == 1) {
                    console.log('Los2:'+los);
                    this.bus = true;
                    $(bs).removeClass('out');
                    $(bs).addClass('active');
                    czasgry+2;
                } else {
                    console.log('Los2:'+los);
                    $(bs).removeClass('active');
                    $(bs).addClass('out');
                }
            }
        }
    };


    var przystanek2 = {
        bus: false,
        autobus: [[1,-10],[2,-10],[3,1]],
        stop: 2,
        stopbus: function() {

            var los = Math.round(Math.random() * 1);

            sb = this.stop;
            bs = '#busstop'+sb;

            if (czasgry > 0) {
                if (los == 1) {
                    console.log('Los2:'+los);
                    this.bus = true;
                    $(bs).removeClass('out');
                    $(bs).addClass('active');
                    czasgry+2;
                } else {
                    console.log('Los2:'+los);
                    $(bs).removeClass('active');
                    $(bs).addClass('out');
                }
            }
        }
    };

    var czas0 = Math.round(Math.random() * 10);
    var czas1 = Math.round(Math.random() * 10);
    var czas2 = Math.round(Math.random() * 10);

    setInterval(function odliczanie() {
        przystanek0.stopbus();
    }, czas0*1000);

    setInterval(function odliczanie() {
        przystanek1.stopbus();
    }, czas0*1000);

    setInterval(function odliczanie() {
        przystanek2.stopbus();
    }, czas2*1000);









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


