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










    var getBus = Math.floor((Math.random() * 3) + 1);

    if (getBus == bus1.number) {

        bus1.Id.addClass('bus-active');
        //setTimeout(function(){bus1.Id.removeClass('bus-active');}, howLongBusStop1 * 1000);

        var $ta = $("#bus1");
        var howLongBusStop1 = Math.floor((Math.random() * 5) + 5*1000);
        setInterval(function() {
            $ta.toggleClass("bus-active");
        }, howLongBusStop1);



        bus2.Id.addClass('bus-no-active').removeClass('bus-active');
        bus3.Id.addClass('bus-no-active').removeClass('bus-active');


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
        bus1.Id.addClass('bus-no-active').removeClass('bus-active');
        bus3.Id.addClass('bus-no-active').removeClass('bus-active');


    } else {
        bus3.Id.addClass('bus-active');
        var howLongBusStop3 = Math.floor((Math.random() * 5) + 5*1000);
        setTimeout(function(){bus3.Id.removeClass('bus-active');}, howLongBusStop3 * 1000);
        ////$(function() {
        //    var howLongBusStop3 = Math.floor((Math.random() * 5) + 5*1000);
        //    setTimeout(function(){bus3.Id.removeClass('bus-active');}, howLongBusStop3 * 1000);
        //    //var $b3 = $("#bus3");
        //    //setInterval(function() {
        //    //    $b3.toggleClass("bus-active");
        //    //}, howLongBusStop3);
        //});
        bus2.Id.addClass('bus-no-active');
        bus1.Id.addClass('bus-no-active');


    }



});

































