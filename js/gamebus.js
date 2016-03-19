function randomBetween(min, max){
    return Math.floor(Math.random() * max) + min;
}

$(document).ready(function () {

    $('#startGra').on('click', function () {
        // $('.plansza').removeClass('hidden');
        $('#ekranStart').addClass('hidden');
        $('#easterEgg').removeClass('bgStart');
        $('#easterEgg').removeClass('hidden');
        $('#licznikGra').removeClass('hidden');
        $('#przystanki').removeClass('hidden');

    //var bs1 = $('#busstop1');
    //var bs2 = $('#busstop2');
    //var bs3 = $('#busstop3');

    var losStop = Math.round(Math.random() * 2);
    var czas = Math.round(Math.random() * 10);
    var pkt = 0;
    var czasgry = 30;


        function openDoors(doorLeft, doorRight) {
            doorLeft.animate({left: 80 }, 500, 'linear');
            doorRight.animate({left: 140}, 500, 'linear');
        }

        function closeDoors (doorLeft, doorRight) {
            doorLeft.animate({ left: 100}, 500, 'linear');
            doorRight.animate({ left: 120 }, 500, 'linear');
        }


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
            $('#punkty').html(pkt);
            $('#koniecGry').removeClass('hidden');
            $('#easterEgg').addClass('bgStart');
            $('#pkt').html(pkt);
            $('#przystanki').addClass('out');
        }
    }

        // losowanie czasu działania funkcji

        var czas0 = randomBetween(2,4) * 1000;
        var czas1 = randomBetween(2,4) * 1000;
        var czas2 = randomBetween(2,4) * 1000;

    function createStop(stopNumber) {
        return {
            stop: stopNumber,
            buses: [
                {line: '10', value: -10, name: 'GDYNIA'},
                {line: '20', value: -10, name: 'SOPOT'},
                {line: '15', value: -5, name: 'SLUPSK'},
                {line: '05', value: -10, name: 'KOSCIERZYNA'},
                {line: '04', value:  1, name: 'OBC4'}
            ],

            inOut: 1,
            stopbus: function () {

                var scope = this;
                bs = '#busstop' + this.stop;
                timedoors = 'czas'+ this.stop;
                liner = '.liner';
                namer = '.namer';

                var $doorLeft = $('<div>').addClass('doorLeft');
                var $doorRight = $('<div>').addClass('doorRight');
                var $afterOpeningDoor = $('<div>').addClass('doorOpen');

                // losuje czy bus jest na przystanku 1 IN jest 0 OUT nie ma
                //this.inOut = Math.round(Math.random() * 1);

                if (czasgry > 0) {
                    if (this.inOut == 1) {

                        // bus jest na przystanku



                        console.log('in ' + stopNumber);
                        $(bs).removeClass('out');
                        $(bs).children('div').remove();
                        $(bs).addClass('in');


                        var index = randomBetween(1, 5) - 1;
                        var bus = scope.buses[index]; // losowanie autobusus

                        $(bs+' '+namer).html(scope.buses[index].name);
                        $(bs+' '+liner).html(scope.buses[index].line);

                        $(bs).append($doorLeft).append($doorRight).append($afterOpeningDoor);
                        openDoors($doorLeft,$doorRight);
                        setTimeout(function(){closeDoors($doorLeft, $doorRight)},3000);

                        //$afterOpeningDoor.on('click', function () {
                        $(bs).children().eq(2).on('click', function () {
                            // bus.bus1
                            console.debug('---- value', scope.buses[index].value);
                            console.debug('---- in', scope.inOut);

                                pkt = pkt + scope.buses[index].value;
                                $('#punkty').html(pkt);
                            //}
                        });

                        scope.inOut = 0;

                    } else {

                        // inOut == 0 / busa nie ma na przystanku

                        console.log('out ' + stopNumber);
                        $(bs).children('div').remove();
                        $(bs).children().eq(2).off('click');

                        $(bs).removeClass('in');
                        $(bs).addClass('out');
                        scope.inOut = 1;
                    }
                }
            }
        }
    }

    // budowanie przystanku

    var przystanek0 = createStop(0);
    var przystanek1 = createStop(1);
    var przystanek2 = createStop(2);



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


