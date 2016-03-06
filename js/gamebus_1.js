$(document).ready(function() {

    gameOver = false;

    var bus1 = {
        number: 1,
        timer: Math.floor(((Math.random() * 4) + 1)* 1000),
        passengers: '',
        points: ''

    };

    var bus2 = {
        number: 2,
        timer: Math.floor(((Math.random() * 4) + 1)* 1000),
        passengers: '',
        points: ''
    };

    var bus3 = {
        number: 3,
        timer: Math.floor(((Math.random() * 4) + 1)* 1000),
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
    var count = 0;


    function goToBusStation1() {
        bus1Id.animate({
            left: 200
        }, bus1.timer, 'linear', goBack1);
        setTimeout(goToBusStation1, 2000);
    }
    function goBack1() {
        bus1Id.animate({
            left:400
        }, bus1.timer, 'linear');
        bus1Id.animate({
            left: 0
        }, 2000, 'linear');
    }


    function goToBusStation2() {
        bus2Id.animate({
            left: 200
        }, bus2.timer, 'linear', goBack2);
        setTimeout(goToBusStation2, 2000);
    }
    function goBack2() {
        bus2Id.animate({
            left:400
        }, bus2.timer, 'linear');
        bus2Id.animate({
            left: 0
        }, 2000, 'linear');
    }

    function goToBusStation3() {
        bus3Id.animate({
            left: 200
        }, bus3.timer, 'linear', goBack3);
        setTimeout(goToBusStation3, 2000);
    }
    function goBack3() {
        bus3Id.animate({
            left:400
        }, bus3.timer, 'linear');
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




    function losowanieAutobusow() {

        var getBus = Math.floor((Math.random() * 5) + 1);

        if (getBus == bus1.number) {

            bus1Id.addClass('bus-active');
            bus1Id.removeClass('bus-no-active');

            setTimeout(function(){
                bus1Id.removeClass('bus-active');
                bus1Id.addClass('bus-no-active');
            }, bus1.timer);

            bus2Id.addClass('bus-no-active').removeClass('bus-active');
            bus3Id.addClass('bus-no-active').removeClass('bus-active');


        } else if (getBus == bus2.number) {

            bus2Id.addClass('bus-active');
            bus2Id.removeClass('bus-no-active');

            setTimeout(function(){
                bus2Id.removeClass('bus-active');
                bus2Id.addClass('bus-no-active');
            }, bus2.timer);

            bus1Id.addClass('bus-no-active').removeClass('bus-active');
            bus3Id.addClass('bus-no-active').removeClass('bus-active');

        } else {
            bus3Id.addClass('bus-active');
            bus3Id.removeClass('bus-no-active');

            setTimeout(function(){
                bus3Id.removeClass('bus-active');
                bus3Id.addClass('bus-no-active');
            }, bus3.timer);

            bus2Id.addClass('bus-no-active').removeClass('bus-active');
            bus1Id.addClass('bus-no-active').removeClass('bus-active');

        }

    }

    setInterval(losowanieAutobusow, 3000);


    $('div').on('click', function () {
        if ($(this).hasClass('bus-no-active')) {
            count -=10;
            $('#points').html("Punkty: " + count);
        }

        if ($(this).hasClass('bus-active')) {
            count += 1;
            $('#points').html("Punkty: " + count);
        }

    });

    var $appContainer = $('<div id="app">').css({position: 'relative'});
    $('body').append($appContainer);

    var buses = [1, -10, 1, 1, 1, -10];

    buses.forEach(function (prize, index) {
        setTimeout(function () {
            var $bus = $('<div>');
            $bus.css({
                background: prize === -10 ? '#c00' : '#00c',
                width: 100,
                height: 50,
                position: 'absolute',
                top: 0,
                left: 0
            });

            $appContainer.append($bus.animate({
                left:400
            }, bus1.timer, 'linear', function () {
                $(this).hide(300);
            }));

            console.log(prize);
        }, 1000 * index + Math.random() * 1000)
    });


});


















