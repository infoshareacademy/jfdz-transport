$(document).ready(function() {

    var bus1 = {
        number: 1,
        timer: Math.floor(((Math.random() * 4) + 1)* 1000)
    };

    var bus2 = {
        number: 2,
        timer: Math.floor(((Math.random() * 4) + 1)* 1000)
    };

    var bus3 = {
        number: 3,
        timer: Math.floor(((Math.random() * 4) + 1)* 1000)
    };

    bus1Id = $('#bus1');
    bus2Id = $('#bus2');
    bus3Id = $('#bus3');
    $clock = $('#clock');
    $startButton = $('#startGameButton');
    $stopButtom = $('#stopGameButton');

    var state = {
        score: 0,
        time: 25
    };

    gameOver = false;

    function displayClock(node, state) {
        $(node).text('Czas: ' + state.time);
    }


function startGame(initialState) {
    var clockIntervalId = setInterval(function () {
        state.time -= 1;
        displayClock($clock, state);
    }, 1000);
    setTimeout(function () {
        clearInterval(clockIntervalId);
    }, state.time * 1000);
}


    $startButton.click(function(){
        state.score = 0;
        $('#points').html("Punkty: " + state.score);
        state.time = 26;
        start(state);
        startGame(state);
        gameOver = true;

    });

    displayClock($clock, state);

    $stopButtom.click(function(){
        start.stop();

    });

    var $appContainer = $('<div id="app">').css({position: 'relative'}).addClass('plansza');
    var $busstop1 = $('<div id="busstop">').addClass('przystanek').addClass('przystanek1');
    var $busstop2 = $('<div id="busstop">').addClass('przystanek').addClass('przystanek2');
    var $busstop3 = $('<div id="busstop">').addClass('przystanek').addClass('przystanek3');


    $('body').append($appContainer);
    $appContainer.append($busstop1).append($busstop2).append($busstop3);

    var buses = [bus1Id, bus2Id, bus3Id, bus3Id, bus1Id, bus1Id];

//function liczeniePunktow(bus){
//    $('div').on('click', function () {
//        if ($(this).hasClass('bus-no-active') ) {
//            state.score -=10;
//            $('#points').html("Punkty: " + state.score);
//        }
//
//        if ($(this).hasClass('bus-active')) {
//            state.score += 1;
//            $('#points').html("Punkty: " + state.score);
//        }
//
//    });
//}

    function liczeniePunktow(bus){
        $('div').on('click', function () {
            if ($(this).hasClass('doorClose') ) {
                state.score -=10;
                $('#points').html("Punkty: " + state.score);
            }

            if ($(this).hasClass('doorOpen')) {
                state.score += 1;
                $('#points').html("Punkty: " + state.score);
            }

        });
    }


    function start() {
        buses.forEach(function (prize, index) {

            setTimeout(function () {
                var $bus = $('<div>').addClass('bus');

                $bus.css({
                    //background: prize === bus1Id ? $bus.addClass('bus-active') : $bus.addClass('bus-no-active'),
                    position: 'absolute',
                    top: 40,
                    left: 0
                });
                var $doorLeft = $('<div>').addClass('doorLeft');
                var $doorRight = $('<div>').addClass('doorRight');
                var $afterOpeningDoor = $('<div>');
                $afterOpeningDoor.css ({
                    background: prize === bus1Id ? $afterOpeningDoor.addClass('doorOpen') : $afterOpeningDoor.addClass('doorClose')
                });
                $bus.append($doorLeft).append($doorRight).append($afterOpeningDoor);


                var $bus1 = $('<div>').addClass('bus');
                $bus1.css({
                    //background: prize === bus1Id ? $bus1.addClass('bus-active') : $bus1.addClass('bus-no-active'),
                    position: 'absolute',
                    top: 180,
                    left: 0
                });

                $appContainer.append(
                    $bus.animate(
                        {
                            left:400
                        },
                        5000, 'linear', function () {

                            $doorLeft.animate({
                                left: 30
                            }, 500, 'linear');

                            $doorRight.animate({
                                left: 100
                            }, 500, 'linear');

                            setTimeout(function(){
                                $doorLeft.animate({
                                    left: 60
                                }, 500, 'linear');

                                $doorRight.animate({
                                    left: 80
                                }, 500, 'linear');
                            }, 1000);

                            setTimeout(function () {

                                $bus.animate({
                                    left: 800
                                }, 5000, 'linear', function () {
                                    $(this).hide(100);
                                });

                            }, 2000)
                        }
                    )
                );

                $appContainer.append(
                    $bus1.animate(
                        {
                            left:400
                        },
                        5000,
                        'linear',
                        function () {
                            setTimeout(function () {
                                $bus1.animate({
                                    left: 800
                                }, 5000, 'linear', function () {
                                    $(this).hide(100);
                                });
                            }, 2000)
                        }
                    )
                );

                //liczeniePunktow($('.bus'));
                liczeniePunktow($afterOpeningDoor);

                console.log(prize);
            }, 5000 * index + Math.random() * 500);

        });

    }



   // function start() {
   // buses.forEach(function (prize, index) {
   //     setTimeout(function () {
   //         var $bus = $('<div>').addClass('bus');
   //         $bus.css({
   //             background: prize === bus1Id ? $bus.addClass('bus-active') : $bus.addClass('bus-no-active'),
   //             //width: 100,
   //             //height: 50,
   //             position: 'absolute',
   //             top: 0,
   //             left: 0
   //         });
   //
   //
   //         $appContainer.append(
   //             $bus.animate(
   //                 {
   //                     left:400
   //                 },
   //                 5000,
   //                 'linear',
   //                 function () {
   //                     setTimeout(function () {
   //                         $bus.animate({
   //                             left: 800
   //                         }, 5000, 'linear', function () {
   //                             $(this).hide(100);
   //                         });
   //                     }, 2000)
   //                 }
   //             )
   //         );
   //
   //         liczeniePunktow($('.bus'));
   //
   //         console.log(prize);
   //     }, 5000 * index + Math.random() * 500);
   //
   // });
   //
   //}

    //start();

});


















