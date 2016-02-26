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
    var howLongBusStop2 = Math.floor((Math.random() * 5) + 3);
    var howLongBusStop3 = Math.floor((Math.random() * 5) + 3);

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

    function jakas() {


        var getBus = Math.floor((Math.random() * 5) + 1);

        if (getBus == bus1.number) {

            bus1.Id.addClass('bus-active');
            setTimeout(function(){bus1.Id.removeClass('bus-active');}, howLongBusStop1*1000);
            bus2.Id.addClass('bus-no-active').removeClass('bus-active');
            bus3.Id.addClass('bus-no-active').removeClass('bus-active');


            $('.bus-active').on('click', function () {
                count++;
                $('#points').html("Punkty: " + count);
            });

            $('.bus-no-active').on('click', function () {
                count -= 10;
                $('#points').html("Punkty: " + count);
            });


        } else if (getBus == bus2.number) {

            bus2.Id.addClass('bus-active');
            setTimeout(function(){bus2.Id.removeClass('bus-active');}, howLongBusStop2*1000);
            bus1.Id.addClass('bus-no-active').removeClass('bus-active');
            bus3.Id.addClass('bus-no-active').removeClass('bus-active');

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
            setTimeout(function(){bus3.Id.removeClass('bus-active');}, howLongBusStop3*1000);
            bus2.Id.addClass('bus-no-active').removeClass('bus-active');
            bus1.Id.addClass('bus-no-active').removeClass('bus-active');

            $('.bus-active').on('click', function () {
                count++;
                $('#points').html("Punkty: " + count);
            });

            $('.bus-no-active').on('click', function () {
                count -= 10;
                $('#points').html("Punkty: " + count);
            });

        }
        //setTimeout(jakas, 3000);

    }

    isetInterval(jakas, 1000);

});


















