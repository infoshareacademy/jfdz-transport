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


    var getBus = Math.floor((Math.random() * 3) + 1);

    if (getBus == bus1.number) {

        bus1.Id.addClass('bus-active');
        bus2.Id.addClass('bus-no-active');
        bus3.Id.addClass('bus-no-active');

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



    function losujAutobus (){
        setInterval(getBus, 1000)
    }

    function setBusStop() {
        x2 = Math.floor((Math.random()* 3) +1);
        console.log(x2);
    }





});

//setInterval(function() {
//    for(var i = 1; i < 5; i++) {
//        console.log(i);
//    }}, 1000);
//


//
//function setTime() {
//    var time = parseInt($('.second').text());
//
//    if (time - 1 > -1) {
//        $('.second').text(time - 1);
//        return false;
//    }
//    window.clearInterval(time);
//    gameOver = true;
//}
//function getBus() {
//
//}
//
//function setTimeBus() {
//
//}


