$(document).ready(function() {

    gameOver = false;

    var bus1 = {
        number: 1,
        timer: Math.floor(((Math.random() * 4) + 1)* 1000),
        passengers: ''
    };

    var bus2 = {
        number: 2,
        timer: Math.floor(((Math.random() * 4) + 1)* 1000),
        passengers: ''
    };

    var bus3 = {
        number: 3,
        timer: Math.floor(((Math.random() * 4) + 1)* 1000),
        passengers: ''
    };

    var bus4 = {
        number: 4,
        timer: Math.floor(((Math.random() * 4) + 1)* 1000),
        passengers: ''
    };

    bus1Id = $('#bus1');
    bus2Id = $('#bus2');
    bus3Id = $('#bus3');
    bus4Id = $('#bus4');
    var button = $('input');
    var points = $('#points');
    var busActive =  $('div .bus-active');
    var busNoActive =  $('div .bus-no-active');
    var gameOver = false;

    var state = {
        score: 0,
        time: 15
    };


    function goToBusStation(a,b) {
        function goToStation() {
        a.animate({
            left: 240
        }, b.timer, 'linear', goBack);
        setTimeout(goToBusStation, 2000);
        }

        function goBack() {
            a.animate({
                left:400
            }, b.timer, 'linear');
            a.fadeOut();
            a.animate({
                left: 0
            }, 200, 'linear');
            b.fadeIn();
            clearTimeout(goBack);
        }
    }



    function goToBusStation1() {
        bus1Id.animate({
            left: Math.floor(((Math.random() * 6) + 15)* 10)
        }, bus1.timer, 'linear', goBack1);
        setTimeout(goToBusStation1, 2000);
        // bus1Id.animate({
        // left:400
        // }, bus1.timer, 'linear');
        // bus1Id.animate({
        // left: 0
        // }, 2000, 'linear');

        function goBack1() {
            bus1Id.animate({
                left:400
            }, bus1.timer, 'linear');
            bus1Id.fadeOut();
            bus1Id.animate({
                left: 0
            }, 200, 'linear');
            bus1Id.fadeIn();
            clearTimeout(goBack1);
        }
    }


    function goToBusStation2() {
        bus2Id.animate({
            left: Math.floor(((Math.random() * 6) + 15)* 10)
        }, bus2.timer, 'linear', goBack2);
        setTimeout(goToBusStation2, 2000);

        function goBack2() {
            bus2Id.animate({
                left:400
            }, bus2.timer, 'linear');
            bus2Id.fadeOut();
            bus2Id.animate({
                left: 0
            }, 200, 'linear');
            bus2Id.fadeIn();
            clearTimeout(goBack2);
        }

    }

    function losowanieBus() {
        var wylosowanyAutobus = Math.floor(((Math.random() * 2) + 1));
        if(wylosowanyAutobus == bus1.number) {
            goToBusStation1();
        }else{
            goToBusStation2();
        }

    }

    setInterval(losowanieBus, 5000);


    function goToBusStation3() {
        bus3Id.animate({
            left: 160
        }, bus3.timer, 'linear', goBack3);
        setTimeout(goToBusStation3, 2000);

        function goBack3() {
            bus3Id.animate({
                left:400
            }, bus3.timer, 'linear');
            bus3Id.fadeOut()
            bus3Id.animate({
                left: 0
            }, 200, 'linear');
            bus3Id.fadeIn();
            clearTimeout(goBack3);
        }
    }

    function goToBusStation4() {
        bus4Id.animate({
            left: 240
        }, bus4.timer, 'linear', goBack4);
        setTimeout(goToBusStation4, 2000);

        function goBack4() {
            bus4Id.animate({
                left:400
            }, bus4.timer, 'linear');
            bus4Id.fadeOut();
            bus4Id.animate({
                left: 0
            }, 200, 'linear');
            bus4Id.fadeIn();
            clearTimeout(goBack4);
        }

    }

    function losowanieBus1() {
        var wylosowanyAutobus = Math.floor(((Math.random() * 2) + 3));
        if(wylosowanyAutobus == bus3.number) {
            goToBusStation3();
        }else{
            goToBusStation4();
        }

    }

    setInterval(losowanieBus1, 5000);


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


   busActive.on('click', function () {
        state.score +=1;
        points.html("Punkty: " + state.score);
    });


    busNoActive.on('click', function () {
        state.score -= 10;
        points.html("Punkty: " + state.score);
    });


});












































