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

    bus1Id = $('#bus1');
    bus2Id = $('#bus2');
    bus3Id = $('#bus3');

    var busstop = {
        number: '1',
        ifThereisBus: false
    };

    buses = [bus1, bus2, bus3];

    gameOver = false;
    var button = $('input');

    var howLongBusStop1 = Math.floor((Math.random() * 5) + 1);
    var howLongBusStop2 = Math.floor((Math.random() * 5) + 1);
    var howLongBusStop3 = Math.floor((Math.random() * 5) + 1);


    var bus4 = document.getElementById("bus1");
    var a = Math.floor(((Math.random() * 5) + 3)* 1000);
    var y = Math.floor(((Math.random() * 5) + 3)* 1000);

    function move() {

        if (bus4.offsetLeft < 30 || bus4.offsetLeft <= 700) {
            $("#bus1").animate({
                left: 700

            }, howLongBusStop1 * 1000, "linear");
            console.log(bus4.offsetLeft);
        } else {
            console.log(bus4.offsetLeft);
            $("#bus1").animate({
                left: 0

            }, howLongBusStop1 * 1000, "linear");

            //setTimeout(move, a)
        }

    }
    setInterval(move, 2000);






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

    function losowanieAutobusow() {


        var getBus = Math.floor((Math.random() * 5) + 1);

        if (getBus == bus1.number) {

            bus1Id.addClass('bus-active');
            bus1Id.removeClass('bus-no-active');

            setTimeout(function(){
                bus1Id.removeClass('bus-active');
                bus1Id.addClass('bus-no-active');
            }, howLongBusStop1*1000);

            bus2Id.addClass('bus-no-active').removeClass('bus-active');
            bus3Id.addClass('bus-no-active').removeClass('bus-active');


            //$('.bus-active').on('click', function () {
            //    count++;
            //    $('#points').html("Punkty: " + count);
            //});
            //
            //$('.bus-no-active').on('click', function () {
            //    count -= 10;
            //    $('#points').html("Punkty: " + count);
            //});


        } else if (getBus == bus2.number) {

            bus2Id.addClass('bus-active');
            bus2Id.removeClass('bus-no-active');

            setTimeout(function(){
                bus2Id.removeClass('bus-active');
                bus2Id.addClass('bus-no-active');
            }, howLongBusStop2*1000);

            bus1Id.addClass('bus-no-active').removeClass('bus-active');
            bus3Id.addClass('bus-no-active').removeClass('bus-active');

        } else {
            bus3Id.addClass('bus-active');
            bus3Id.removeClass('bus-no-active');

            setTimeout(function(){
                bus3Id.removeClass('bus-active');
                bus3Id.addClass('bus-no-active');
            }, howLongBusStop3*1000);

            bus2Id.addClass('bus-no-active').removeClass('bus-active');
            bus1Id.addClass('bus-no-active').removeClass('bus-active');

        }
        //setTimeout(jakas, 3000);

        //$('.bus-active').on('click', function () {
        //        count++;
        //        $('#points').html("Punkty: " + count);
        //    });
        //
        //    $('.bus-no-active').on('click', function () {
        //        count -= 10;
        //        $('#points').html("Punkty: " + count);
        //    });

    }

    setInterval(losowanieAutobusow, 3000);


        $('div .bus-active').on('click', function () {
            count +=1;
            $('#points').html("Punkty: " + count);
        });


        $('.bus-no-active').on('click', function () {
            count -= 10;
            $('#points').html("Punkty: " + count);
        });


});


















