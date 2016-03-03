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

    bus1Id = $('#bus1');
    bus2Id = $('#bus2');
    bus3Id = $('#bus3');

    bus1.Id = $('#bus1');
    bus2.Id = $('#bus2');
    bus3.Id = $('#bus3');

    buses = [bus1, bus2, bus3];

    gameOver = false;
    var button = $('input');


    //var kwadrat2 =  $("#child");

    var bus4 = document.getElementById("bus1");
    var a = Math.floor(((Math.random() * 5) + 3)* 1000);
    var y = Math.floor(((Math.random() * 5) + 3)* 1000);

    //function move() {
    //
    //    if (bus4.offsetLeft < 30) {
    //        $("#bus1").animate({
    //            left: 300
    //
    //        }, a, "linear");
    //        console.log(bus4.offsetLeft);
    //
    //    }else if(bus4.offsetLeft <= 329 && bus4.offsetLeft <= 630){
    //        $("#bus1").animate({
    //            left: 600
    //
    //        }, a, "linear");
    //        console.log(bus4.offsetLeft);
    //
    //    }else {
    //        console.log(bus4.offsetLeft);
    //        $("#bus1").animate({
    //            left: 0
    //
    //        }, y, "linear");
    //
    //        //.animate({
    //        //    left: 300
    //        //
    //        //}, a, "linear");
    //
    //        //setTimeout(move, 1000)
    //    }
    //
    //    setTimeout(move, 1000)
    //}
    //
    //setInterval(move, 2000);

    //var y = Math.floor(((Math.random() * 5) + 3)* 1000);

//function goToBusStation() {
//
//       bus1Id.animate({
//           left: 200
//       }, howLongBusStop1, 'linear', goBack);
//        setTimeout(goToBusStation, 2000);
//    }
//function goBack() {
//    bus1Id.animate({
//        left:400
//    }, howLongBusStop1, 'linear');
//    bus1Id.animate({
//        left: 0
//    }, 2000, 'linear');
//}

    //goToBusStation();

    //goToBusStation(bus1Id, howLongBusStop1);
    var howLongBusStop1 = Math.floor((Math.random() * 5) + 5*1000);


    function goToBusStation(b,c) {
        b.animate({
            left: 200
        }, c, 'linear', goBack);
        setTimeout(goToBusStation, 2000);
    }

    function goBack(d,e) {
        d.animate({
            left:400
        }, e, 'linear');
        d.animate({
            left: 0
        }, 2000, 'linear');
    }

    goBack(bus1Id, howLongBusStop1);
    goToBusStation(bus1Id, howLongBusStop1);





    //var howLongBusStop1 = Math.floor((Math.random() * 5) + 5*1000);

    var getBus = Math.floor((Math.random() * 3) + 1);


    if (getBus == bus1.number) {

        goToBusStation();
        bus1.Id.addClass('bus-active');
        //setTimeout(function(){bus1.Id.removeClass('bus-active');}, howLongBusStop1 * 1000);

        var $ta = $("#bus1");
        //setInterval(move, 2000);

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


//function move() {
//
//    if (bus4.offsetLeft < 30 || bus4.offsetLeft <= 700) {
//        $("#bus1").animate({
//            left: 700
//
//        }, howLongBusStop1 * 1000, "linear");
//        console.log(bus4.offsetLeft);
//    } else {
//        console.log(bus4.offsetLeft);
//        $("#bus1").animate({
//            left: 0
//
//        }, howLongBusStop1 * 1000, "linear");
//
//        //setTimeout(move, a)
//    }
//
//}
//setInterval(move, 2000);

//$('.bus-active').on('click', function () {
//    count++;
//    $('#points').html("Punkty: " + count);
//});
//
//$('.bus-no-active').on('click', function () {
//    count -= 10;
//    $('#points').html("Punkty: " + count);
//});

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

























