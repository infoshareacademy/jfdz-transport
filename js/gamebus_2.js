$(document).ready(function() {

    var bus1 = {
        number: 1,
        //timer: Math.floor(((Math.random() * 4) + 1)* 1000)
    };

    var bus2 = {
        number: 2,
        //timer: Math.floor(((Math.random() * 4) + 1)* 1000)
    };

    var bus3 = {
        number: 3,
        //timer: Math.floor(((Math.random() * 4) + 1)* 1000)
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

    var buses = [1, 2, 2, 1, 2, 1, 1, 2];

    var buses1 =[];

    function getBuses(list) {

        var index1 =  list[Math.floor((Math.random()*list.length))];
        var index2 =  list[Math.floor((Math.random()*list.length))];
        var index3 =  list[Math.floor((Math.random()*list.length))];
        var index4 =  list[Math.floor((Math.random()*list.length))];
        var index5 =  list[Math.floor((Math.random()*list.length))];
        var index6 =  list[Math.floor((Math.random()*list.length))];
        var index7 =  list[Math.floor((Math.random()*list.length))];
        var index8 =  list[Math.floor((Math.random()*list.length))];
        buses1.unshift(index1, index2, index3, index4, index5, index6, index7, index8);

        console.log(buses1);
    }

    console.log(buses1);

    $startButton.click(function(){
        buses1.length = 0;
        getBuses(buses);
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

    function openDoors(doorLeft, doorRight) {
        doorLeft.animate({left: 30 }, 500, 'linear');
        doorRight.animate({left: 100}, 500, 'linear');
    }

    function closeDoors (doorLeft, doorRight) {
        doorLeft.animate({ left: 60}, 500, 'linear');
        doorRight.animate({ left: 80 }, 500, 'linear');
    }

    function gofromBusstop(bus) {
        bus.animate({ left: 800 }, 5000, 'linear', function () {
            $(this).hide(100);
        });
    }


    function addPlaceUnderDoor(door, prize){
        door.css ({
            background: prize === 1 ? door.addClass('doorOpen') : door.addClass('doorClose')
        });
    }


    var $afterOpeningDoor;

    function start() {
        buses1.forEach(function (prize, index) {

            setTimeout(function () {
                var $bus1 = $('<div>').addClass('bus1');
                var $bus2 = $('<div>').addClass('bus3');
                var $bus3 = $('<div>').addClass('bus2');
                bus1.timer = Math.floor(((Math.random() * 3) + 1)* 1000);

                var $doorLeft = $('<div>').addClass('doorLeft');
                var $doorRight = $('<div>').addClass('doorRight');
                var $afterOpeningDoor = $('<div>');

                addPlaceUnderDoor($afterOpeningDoor, prize);
                $bus1.append($doorLeft).append($doorRight).append($afterOpeningDoor);
                $bus2.append($doorLeft).append($doorRight).append($afterOpeningDoor);
                $bus3.append($doorLeft).append($doorRight).append($afterOpeningDoor);
                liczeniePunktow($afterOpeningDoor);

                $appContainer.append(
                    $bus1.animate({left:400}, 5000, 'linear', function ()
                        {
                            openDoors($doorLeft,$doorRight);
                            setTimeout(function(){closeDoors($doorLeft, $doorRight)}, 1000);
                            setTimeout(function () {gofromBusstop($bus1)}, bus1.timer)

                        }
                    ),
                    $bus2.animate({left:400}, 5000, 'linear', function ()
                        {
                            openDoors($doorLeft,$doorRight);
                            setTimeout(function(){closeDoors($doorLeft, $doorRight)}, 1000);
                            setTimeout(function () {gofromBusstop($bus2)}, 2000)
                        }
                    ),
                    $bus3.animate({left:400}, 5000, 'linear', function ()
                        {
                            openDoors($doorLeft,$doorRight);
                            setTimeout(function(){closeDoors($doorLeft, $doorRight)}, 1000);
                            setTimeout(function () {gofromBusstop($bus3)}, 2000)
                        }
                    )
                );
                console.log($afterOpeningDoor);
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


















