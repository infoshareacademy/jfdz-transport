function randomBetween(min, max){
    return Math.floor(Math.random() * max) + min;
}

$(document).ready(function () {

    $('#startGra').on('click', function () {
        // $('.plansza').removeClass('hidden');
        $('#ekranStart').addClass('hidden');
        $('#easterEgg').removeClass('hidden');
        $('#licznikGra').removeClass('hidden');
        $('#przystanki').removeClass('hidden');

    var bs1 = $('#busstop1');
    var bs2 = $('#busstop2');
    var bs3 = $('#busstop3');

    var losStop = Math.round(Math.random() * 2);
    var czas = Math.round(Math.random() * 10);
    var pkt = 0;
    var czasgry = 20;

    setInterval(function () {
        gameTime()
    }, 1000);

    function gameTime() {
        if (czasgry > 0) {
            czasgry--;
            $('#czas').html(czasgry)
        } else {
            clearInterval(gameTime);
            $('.przystanek').off('click');
            $('#punkty').html('Koniec! - Zdobyłeś punktów: ' + pkt);
        }
    }



    function createStop(stopNumber) {
        return {
            stop: stopNumber,
            buses: [
                {line: 1, value: -10, name: 'GDYNIA'},
                {line: 2, value: -10, name: 'SOPOT'},
                {line: 3, value:  1, name: 'OBC4'}
            ],

            inOut: 1,
            stopbus: function () {
                var scope = this;
                sb = this.stop;
                bs = '#busstop' + sb;
                this.inOut = Math.round(Math.random() * 1);
                if (czasgry > 0) {
                    if (this.inOut == 1) {
                        console.log('in ' + stopNumber);
                        $(bs).removeClass('out');
                        $(bs).addClass('in');
                        var index = randomBetween(1, 3) - 1;
                        var bus = scope.buses[index];

                        if (index == 2) {
                            $(bs).addClass('obc');
                        } else {
                            $(bs).removeClass('obc');
                        }


                        $(bs).click(function () {
                            // bus.bus1
                            console.debug('---- value', scope.buses[index].value);
                            pkt = pkt + scope.buses[index].value;
                            $('#punkty').html(pkt);
                        });

                    } else {
                        console.log('out ' + stopNumber);
                        $(bs).removeClass('in');
                        $(bs).addClass('out');
                    }
                }
            }
        }
    }

    var przystanek0 = createStop(0);
    var przystanek1 = createStop(1);
    var przystanek2 = createStop(2);

    var czas0 = randomBetween(2,7) * 1000;
    var czas1 = randomBetween(2,7) * 1000;
    var czas2 = randomBetween(2,7) * 1000;

    setInterval(function () {
        przystanek0.stopbus();
    }, czas0);

    setInterval(function () {
        przystanek1.stopbus();
    }, czas1);

    setInterval(function () {
        przystanek2.stopbus();
    }, czas2);
    });

    $('.feature-image-3').on('click', function () {
        $('#easterEgg').removeClass('hidden');
        $('#koniec').removeClass('hidden');
        $('#ekranStart').removeClass('hidden');
    });

    $('#startGra').on('click', function () {
        $('.plansza').removeClass('hidden');
        $('#ekranStart').addClass('hidden');
        $('#easterEgg').removeClass('hidden');
        $('#licznikGra').removeClass('hidden');
        $('#przystanki').removeClass('hidden');
       });

    $('#koniec, #koniec2, #przyciskOk').on('click', function () {
        $('#easterEgg').addClass('hidden');
        $('#przyciskOk').addClass('hidden');
        $('#koniecGry').addClass('hidden');
    });

});


