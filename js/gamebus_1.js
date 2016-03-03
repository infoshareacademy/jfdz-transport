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

    var howLongBusStop1 = Math.floor(((Math.random() * 4) + 1)* 1000);
    var howLongBusStop2 = Math.floor(((Math.random() * 4) + 1)* 1000);
    var howLongBusStop3 = Math.floor(((Math.random() * 4) + 1)* 1000);


    function goToBusStation1() {
        bus1Id.animate({
            left: 200
        }, howLongBusStop1, 'linear', goBack1);
        setTimeout(goToBusStation1, 2000);
    }
    function goBack1() {
        bus1Id.animate({
            left:400
        }, howLongBusStop1, 'linear');
        bus1Id.animate({
            left: 0
        }, 2000, 'linear');
    }


    function goToBusStation2() {
        bus2Id.animate({
            left: 200
        }, howLongBusStop2, 'linear', goBack2);
        setTimeout(goToBusStation2, 2000);
    }
    function goBack2() {
        bus2Id.animate({
            left:400
        }, howLongBusStop2, 'linear');
        bus2Id.animate({
            left: 0
        }, 2000, 'linear');
    }

    function goToBusStation3() {
        bus3Id.animate({
            left: 200
        }, howLongBusStop3, 'linear', goBack3);
        setTimeout(goToBusStation3, 2000);
    }
    function goBack3() {
        bus3Id.animate({
            left:400
        }, howLongBusStop3, 'linear');
        bus3Id.animate({
            left: 0
        }, 2000, 'linear');
    }


    goToBusStation1();
    goToBusStation2();
    goToBusStation3();





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


    function losowanieAutobusow() {

        var getBus = Math.floor((Math.random() * 5) + 1);

        if (getBus == bus1.number) {

            bus1Id.addClass('bus-active');
            bus1Id.removeClass('bus-no-active');

            setTimeout(function(){
                bus1Id.removeClass('bus-active');
                bus1Id.addClass('bus-no-active');
            }, howLongBusStop1);

            bus2Id.addClass('bus-no-active').removeClass('bus-active');
            bus3Id.addClass('bus-no-active').removeClass('bus-active');


        } else if (getBus == bus2.number) {

            bus2Id.addClass('bus-active');
            bus2Id.removeClass('bus-no-active');

            setTimeout(function(){
                bus2Id.removeClass('bus-active');
                bus2Id.addClass('bus-no-active');
            }, howLongBusStop2);

            bus1Id.addClass('bus-no-active').removeClass('bus-active');
            bus3Id.addClass('bus-no-active').removeClass('bus-active');

        } else {
            bus3Id.addClass('bus-active');
            bus3Id.removeClass('bus-no-active');

            setTimeout(function(){
                bus3Id.removeClass('bus-active');
                bus3Id.addClass('bus-no-active');
            }, howLongBusStop3);

            bus2Id.addClass('bus-no-active').removeClass('bus-active');
            bus1Id.addClass('bus-no-active').removeClass('bus-active');

        }

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


















