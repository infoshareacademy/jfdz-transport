$(document).ready(function() {

    gameOver = false;

    var bus1 = {
        number: 1,
        timer: '',
        passengers: '',
        points: ''

    };

    var bus2 = {
        number: 2,
        timer: '',
        passengers: '',
        points: ''
    };

    var bus3 = {
        number: 3,
        timer: '',
        passengers: '',
        points: ''
    };

    bus1.Id = $('#bus1');
    bus2.Id = $('#bus2');
    bus3.Id = $('#bus3');

    var busstop = {
        number: '1',
        ifThereisBus: false
    };

    buses = [bus1, bus2, bus3];

    gameOver = false;
    var button = $('input');

    var howLongBusStop1 = Math.floor((Math.random() * 5) + 3);
    //
    //function setBusTime(howLongBusStop) {
    //
    //    var timerBusStop = setInterval(function () {
    //        howLongBusStop--;
    //        var t = howLongBusStop;
    //        var czasPostoju = [];
    //        nowaTabliac = czasPostoju.push[t];
    //        console.log(t);
    //        if (howLongBusStop == 0) {
    //
    //            clearInterval(timerBusStop);
    //        }
    //
    //    }, 1000);
    //
    //}


    function setTime() {

        var sec = parseInt($('.second').text());
        var timer = setInterval(function () {
            $('.second').text(--sec);
            if (sec == 0) {
                $('.second').fadeOut('fast');
                $('.finish').delay(500).fadeIn(500);

                clearInterval(timer);
                gameOver = true;
            }

        }, 1000);
    }

    button.on('click', setTime);

    var count = 0;

    //bus1.timer = setBusTime(howLongBusStop1);



                    var getBus = Math.floor((Math.random() * 3) + 1);

            if (getBus == bus1.number) {

                bus1.Id.addClass('bus-active');
                $(function() {
                    var howLongBusStop1 = Math.floor((Math.random() * 5) + 5*1000);
                    var $b1 = $("#bus1");
                    setInterval(function() {
                        $b1.toggleClass("bus-active");
                    }, howLongBusStop1);
                });
                bus2.Id.addClass('bus-no-active');
                bus3.Id.addClass('bus-no-active');


                $('.bus-active').on('click', function () {
                    count += 11;
                    $('#points').html("Punkty: " + count);
                });

                $('.bus-no-active').on('click', function () {
                    count -= 10;
                    $('#points').html("Punkty: " + count);
                });

            } else if (getBus == bus2.number) {

                bus2.Id.addClass('bus-active');
                bus1.Id.addClass('bus-no-active');
                bus3.Id.addClass('bus-no-active');

                $('.bus-active').on('click', function () {
                    count++;
                    $('#points').html("Punkty: " + count);
                });

                $('.bus-no-active').on('click', function () {
                    count -= 10;
                    $('#points').html("Punkty: " + count);
                });


            } else {
                bus3.Id.addClass('bus-active');
                bus2.Id.addClass('bus-no-active');
                bus1.Id.addClass('bus-no-active');

                $('.bus-active').on('click', function () {
                    count++;
                    $('#points').html("Punkty: " + count);
                });

                $('.bus-no-active').on('click', function () {
                    count -= 10;
                    $('#points').html("Punkty: " + count);
                });

            }


});





















