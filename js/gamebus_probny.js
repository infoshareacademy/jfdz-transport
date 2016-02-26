/**
 * Created by luk-w on 26.02.2016.
 */
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


    buses = [bus1, bus2, bus3];

    gameOver = false;
    var button = $('input');

    var howLongBusStop1 = Math.floor((Math.random() * 5) + 3);


//function setBusTime() {
//
//    var howLongBusStop = Math.floor((Math.random() * 5) + 1);
//    var timerBusStop = setInterval(function () {
//        howLongBusStop--;
//        console.log(howLongBusStop);
//        if (howLongBusStop == 0) {
//
//            clearInterval(timerBusStop);
//
//        }
//
//    }, 1000);
//}

    //jakasF = setInterval(drugF, 1000);
    //
    //var howLongBusStop1 = 0;
    //howLongBusStop1 = Math.floor((Math.random() * 5) + 1);
    //function drugF() {
    //    howLongBusStop1 = howLongBusStop1--;
    //    if(howLongBusStop1 < 10) {
    //        console.log(howLongBusStop1)
    //
    //    }
    //    //else if (howLongBusStop1 > 20){
    //    //    clearInterval(jakasF);
    //    //}
    //}
//
//    clearInterval(jakasF);


//
    var getBus = Math.floor((Math.random() * 3) + 1);

    if (getBus == bus1.number) {

        bus1.Id.addClass('bus-active');
        //setTimeout(function(){bus1.Id.removeClass('bus-active');}, howLongBusStop1 * 1000);

        var $ta = $("#bus1");
        setInterval(function() {
            $ta.toggleClass("bus-active");
        }, howLongBusStop1);
        bus2.Id.addClass('bus-no-active');
        bus3.Id.addClass('bus-no-active');


    } else if (getBus == bus2.number) {

        bus2.Id.addClass('bus-active');
        //setTimeout(function(){bus2.Id.removeClass('bus-active');}, howLongBusStop1 * 1000);
        $(function() {
            var howLongBusStop2 = Math.floor((Math.random() * 5) + 5*1000);
            var $b2 = $("#bus2");
            setInterval(function() {
                $b2.toggleClass("bus-active");
            }, howLongBusStop2);
        });
        bus1.Id.addClass('bus-no-active');
        bus3.Id.addClass('bus-no-active');


    } else {
        bus3.Id.addClass('bus-active');
        //setTimeout(function(){bus3.Id.removeClass('bus-active');}, howLongBusStop1 * 1000);
        $(function() {
            var howLongBusStop3 = Math.floor((Math.random() * 5) + 5*1000);
            var $b3 = $("#bus3");
            setInterval(function() {
                $b3.toggleClass("bus-active");
            }, howLongBusStop3);
        });
        bus2.Id.addClass('bus-no-active');
        bus1.Id.addClass('bus-no-active');


    }
});


$(document).ready(function() {

//$(function() {
//    var howLongBusStop1 = Math.floor((Math.random() * 5) + 3);
//    var fa = $("#bus1");
//    setInterval(function() {
//
//        if ($fa.hasClass('bus-active') ){
//            $fa.removeClass('bus-active')
//        } else {
//            $fa.addClass('bus-active');
//        }
//
//        //fa = (fa.hasClass('bus-active')) ? fa.addClass('bus-no-active') : fa.addClass('bus-active');
//    }, 3000);
//
//
//
//})

});

//$(function() {
//    var howLongBusStop1 = Math.floor((Math.random() * 5) + 4*1000);
//    var $ta = $("#bus1");
//    setInterval(function() {
//        $ta.toggleClass("bus-active");
//    }, howLongBusStop1);
//});

































