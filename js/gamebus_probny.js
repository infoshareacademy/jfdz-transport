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

    var bus4 = {
            number: 4,
            timer: Math.floor(((Math.random() * 4) + 1)* 1000),
            passengers: '',
            points: ''
        };

    bus1Id = $('#bus1');
    bus2Id = $('#bus2');
    bus3Id = $('#bus3');
    bus4Id = $('#bus4');

    var busstop = {
        number: '1',
        ifThereisBus: false
    };

    buses = [bus1, bus2, bus3];

    gameOver = false;
    var button = $('input');
    var count = 0;

    //function goToBusStation(a,b) {
    //    a.animate({
    //        left: 240
    //    }, b.timer, 'linear', goBack);
    //    setTimeout(goToBusStation, 2000);
    //
    //    function goBack() {
    //        a.animate({
    //            left:400
    //        }, b.timer, 'linear');
    //        a.fadeOut();
    //        a.animate({
    //            left: 0
    //        }, 200, 'linear');
    //        b.fadeIn();
    //        clearTimeout(goBack);
    //    }
    //}
    //
    //goToBusStation(bus3Id,bus3);



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

    function losowanieAut() {
        var wylosowanyAutobus = Math.floor(((Math.random() * 2) + 1));
        if(wylosowanyAutobus == bus1.number) {
            goToBusStation1();
        }else{
            goToBusStation2();
        }

    }

    setInterval(losowanieAut, 5000);


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

    function losowanieAut1() {
        var wylosowanyAutobus = Math.floor(((Math.random() * 2) + 3));
        if(wylosowanyAutobus == bus3.number) {
            goToBusStation3();
        }else{
            goToBusStation4();
        }

    }

    setInterval(losowanieAut1, 5000);


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


    $('div .bus-active').on('click', function () {
        count +=1;
        $('#points').html("Punkty: " + count);
    });


    $('.bus-no-active').on('click', function () {
        count -= 10;
        $('#points').html("Punkty: " + count);
    });


});

 //wersja 1************************************************************************************************

//
//$(document).ready(function() {
//
//    gameOver = false;
//
//    var bus1 = {
//        number: 1,
//        timer: Math.floor(((Math.random() * 4) + 1)* 1000),
//        passengers: '',
//        points: ''
//
//    };
//
//    var bus2 = {
//        number: 2,
//        timer: Math.floor(((Math.random() * 4) + 1)* 1000),
//        passengers: '',
//        points: ''
//    };
//
//    var bus3 = {
//        number: 3,
//        timer: Math.floor(((Math.random() * 4) + 1)* 1000),
//        passengers: '',
//        points: ''
//    };
//
//    bus1Id = $('#bus1');
//    bus2Id = $('#bus2');
//    bus3Id = $('#bus3');
//
//    var busstop = {
//        number: '1',
//        ifThereisBus: false
//    };
//
//    buses = [bus1, bus2, bus3];
//
//    gameOver = false;
//    var button = $('input');
//    var count = 0;
//
//
//    function goToBusStation1() {
//        bus1Id.animate({
//            left: 200
//        }, bus1.timer, 'linear', goBack1);
//        setTimeout(goToBusStation1, 2000);
//    }
//    function goBack1() {
//        bus1Id.animate({
//            left:400
//        }, bus1.timer, 'linear');
//        bus1Id.animate({
//            left: 0
//        }, 2000, 'linear');
//    }
//
//
//    function goToBusStation2() {
//        bus2Id.animate({
//            left: 200
//        }, bus2.timer, 'linear', goBack2);
//        setTimeout(goToBusStation2, 2000);
//    }
//    function goBack2() {
//        bus2Id.animate({
//            left:400
//        }, bus2.timer, 'linear');
//        bus2Id.animate({
//            left: 0
//        }, 2000, 'linear');
//    }
//
//    function goToBusStation3() {
//        bus3Id.animate({
//            left: 200
//        }, bus3.timer, 'linear', goBack3);
//        setTimeout(goToBusStation3, 2000);
//    }
//    function goBack3() {
//        bus3Id.animate({
//            left:400
//        }, bus3.timer, 'linear');
//        bus3Id.animate({
//            left: 0
//        }, 2000, 'linear');
//    }
//
//
//    goToBusStation1();
//    goToBusStation2();
//    goToBusStation3();
//
//
//
//
//
//    function setTime() {
//
//        var sec = parseInt($('.second').text());
//        var timer = setInterval(function () {
//            $('.second').text(--sec);
//            if (sec == 0) {
//                $('.second').fadeOut('fast');
//                $('.finish').delay(500).fadeIn(500);
//
//                clearInterval(timer);
//                gameOver = true;
//            }
//
//        }, 1000);
//    }
//
//    button.on('click', setTime);
//
//
//
//
//    function losowanieAutobusow() {
//
//        var getBus = Math.floor((Math.random() * 5) + 1);
//
//        if (getBus == bus1.number) {
//
//            bus1Id.addClass('bus-active');
//            bus1Id.removeClass('bus-no-active');
//
//            setTimeout(function(){
//                bus1Id.removeClass('bus-active');
//                bus1Id.addClass('bus-no-active');
//            }, bus1.timer);
//
//            bus2Id.addClass('bus-no-active').removeClass('bus-active');
//            bus3Id.addClass('bus-no-active').removeClass('bus-active');
//
//
//        } else if (getBus == bus2.number) {
//
//            bus2Id.addClass('bus-active');
//            bus2Id.removeClass('bus-no-active');
//
//            setTimeout(function(){
//                bus2Id.removeClass('bus-active');
//                bus2Id.addClass('bus-no-active');
//            }, bus2.timer);
//
//            bus1Id.addClass('bus-no-active').removeClass('bus-active');
//            bus3Id.addClass('bus-no-active').removeClass('bus-active');
//
//        } else {
//            bus3Id.addClass('bus-active');
//            bus3Id.removeClass('bus-no-active');
//
//            setTimeout(function(){
//                bus3Id.removeClass('bus-active');
//                bus3Id.addClass('bus-no-active');
//            }, bus3.timer);
//
//            bus2Id.addClass('bus-no-active').removeClass('bus-active');
//            bus1Id.addClass('bus-no-active').removeClass('bus-active');
//
//        }
//
//    }
//
//    setInterval(losowanieAutobusow, 3000);




//wersja4******************************************************
//
//button.on('click', setTime);
//
//$('div').on('click', function () {
//    if ($(this).hasClass('bus-no-active')) {
//        count -=10;
//        $('#points').html("Punkty: " + count);
//    }
//
//    if ($(this).hasClass('bus-active')) {
//        count += 1;
//        $('#points').html("Punkty: " + count);
//    }
//
//});
//
//var $appContainer = $('<div id="app">').css({position: 'relative'});
//$('body').append($appContainer);
//
//var buses = [1, -10, 1, 1, 1, -10];
//
//buses.forEach(function (prize, index) {
//    setTimeout(function () {
//        var $bus = $('<div>');
//        $bus.css({
//            background: prize === -10 ? '#c00' : '#00c',
//            width: 100,
//            height: 50,
//            position: 'absolute',
//            top: 0,
//            left: 0
//        });
//
//        $appContainer.append(
//            $bus.animate(
//                {
//                    left:200
//                },
//                4000,
//                'linear',
//                function () {
//                    setTimeout(function () {
//                        $bus.animate({
//                            left: 400
//                        }, 4000, 'linear', function () {
//                            $(this).hide(300);
//                        });
//                    }, 1000)
//                }
//            )
//        );
//
//        console.log(prize);
//    }, 2000 * index + Math.random() * 500)
//});
//
//
//});


















































///**
// * Created by luk-w on 26.02.2016.
// */
//$(document).ready(function() {
//
//    gameOver = false;
//
//    var bus1 = {
//        number: 1,
//        timer: '',
//        passengers: '',
//        points: ''
//
//    };
//
//    var bus2 = {
//        number: 2,
//        timer: '',
//        passengers: '',
//        points: ''
//    };
//
//    var bus3 = {
//        number: 3,
//        timer: '',
//        passengers: '',
//        points: ''
//    };
//
//    bus1Id = $('#bus1');
//    bus2Id = $('#bus2');
//    bus3Id = $('#bus3');
//
//    bus1.Id = $('#bus1');
//    bus2.Id = $('#bus2');
//    bus3.Id = $('#bus3');
//
//    buses = [bus1, bus2, bus3];
//
//    gameOver = false;
//    var button = $('input');
//
//
//    //var kwadrat2 =  $("#child");
//
//    var bus4 = document.getElementById("bus1");
//    var a = Math.floor(((Math.random() * 5) + 3)* 1000);
//    var y = Math.floor(((Math.random() * 5) + 3)* 1000);
//
//    //function move() {
//    //
//    //    if (bus4.offsetLeft < 30) {
//    //        $("#bus1").animate({
//    //            left: 300
//    //
//    //        }, a, "linear");
//    //        console.log(bus4.offsetLeft);
//    //
//    //    }else if(bus4.offsetLeft <= 329 && bus4.offsetLeft <= 630){
//    //        $("#bus1").animate({
//    //            left: 600
//    //
//    //        }, a, "linear");
//    //        console.log(bus4.offsetLeft);
//    //
//    //    }else {
//    //        console.log(bus4.offsetLeft);
//    //        $("#bus1").animate({
//    //            left: 0
//    //
//    //        }, y, "linear");
//    //
//    //        //.animate({
//    //        //    left: 300
//    //        //
//    //        //}, a, "linear");
//    //
//    //        //setTimeout(move, 1000)
//    //    }
//    //
//    //    setTimeout(move, 1000)
//    //}
//    //
//    //setInterval(move, 2000);
//
//    //var y = Math.floor(((Math.random() * 5) + 3)* 1000);
//
////function goToBusStation() {
////
////       bus1Id.animate({
////           left: 200
////       }, howLongBusStop1, 'linear', goBack);
////        setTimeout(goToBusStation, 2000);
////    }
////function goBack() {
////    bus1Id.animate({
////        left:400
////    }, howLongBusStop1, 'linear');
////    bus1Id.animate({
////        left: 0
////    }, 2000, 'linear');
////}
//
//    //goToBusStation();
//
//    //goToBusStation(bus1Id, howLongBusStop1);
//    var howLongBusStop1 = Math.floor((Math.random() * 5) + 5*1000);
//
//
//    function goToBusStation(b,c) {
//        b.animate({
//            left: 200
//        }, c, 'linear', goBack);
//        setTimeout(goToBusStation, 2000);
//    }
//
//    function goBack(d,e) {
//        d.animate({
//            left:400
//        }, e, 'linear');
//        d.animate({
//            left: 0
//        }, 2000, 'linear');
//    }
//
//    goBack(bus1Id, howLongBusStop1);
//    goToBusStation(bus1Id, howLongBusStop1);
//
//
//
//
//
//    //var howLongBusStop1 = Math.floor((Math.random() * 5) + 5*1000);
//
//    var getBus = Math.floor((Math.random() * 3) + 1);
//
//
//    if (getBus == bus1.number) {
//
//        goToBusStation();
//        bus1.Id.addClass('bus-active');
//        //setTimeout(function(){bus1.Id.removeClass('bus-active');}, howLongBusStop1 * 1000);
//
//        var $ta = $("#bus1");
//        //setInterval(move, 2000);
//
//        setInterval(function() {
//            $ta.toggleClass("bus-active");
//        }, howLongBusStop1);
//
//
//
//        bus2.Id.addClass('bus-no-active').removeClass('bus-active');
//        bus3.Id.addClass('bus-no-active').removeClass('bus-active');
//
//
//    } else if (getBus == bus2.number) {
//
//        bus2.Id.addClass('bus-active');
//        //setTimeout(function(){bus2.Id.removeClass('bus-active');}, howLongBusStop1 * 1000);
//        $(function() {
//            var howLongBusStop2 = Math.floor((Math.random() * 5) + 5*1000);
//            var $b2 = $("#bus2");
//            setInterval(function() {
//                $b2.toggleClass("bus-active");
//            }, howLongBusStop2);
//        });
//        bus1.Id.addClass('bus-no-active').removeClass('bus-active');
//        bus3.Id.addClass('bus-no-active').removeClass('bus-active');
//
//
//    } else {
//        bus3.Id.addClass('bus-active');
//        var howLongBusStop3 = Math.floor((Math.random() * 5) + 5*1000);
//        setTimeout(function(){bus3.Id.removeClass('bus-active');}, howLongBusStop3 * 1000);
//        ////$(function() {
//        //    var howLongBusStop3 = Math.floor((Math.random() * 5) + 5*1000);
//        //    setTimeout(function(){bus3.Id.removeClass('bus-active');}, howLongBusStop3 * 1000);
//        //    //var $b3 = $("#bus3");
//        //    //setInterval(function() {
//        //    //    $b3.toggleClass("bus-active");
//        //    //}, howLongBusStop3);
//        //});
//        bus2.Id.addClass('bus-no-active');
//        bus1.Id.addClass('bus-no-active');
//
//
//    }
//
//
//
//});
//
//
//
//
//
//
////
////function setBusTime(howLongBusStop) {
////
////    var timerBusStop = setInterval(function () {
////        howLongBusStop--;
////        var t = howLongBusStop;
////        var czasPostoju = [];
////        nowaTabliac = czasPostoju.push[t];
////        console.log(t);
////        if (howLongBusStop == 0) {
////
////            clearInterval(timerBusStop);
////        }
////
////    }, 1000);
////
////}
//
//
////function move() {
////
////    if (bus4.offsetLeft < 30 || bus4.offsetLeft <= 700) {
////        $("#bus1").animate({
////            left: 700
////
////        }, howLongBusStop1 * 1000, "linear");
////        console.log(bus4.offsetLeft);
////    } else {
////        console.log(bus4.offsetLeft);
////        $("#bus1").animate({
////            left: 0
////
////        }, howLongBusStop1 * 1000, "linear");
////
////        //setTimeout(move, a)
////    }
////
////}
////setInterval(move, 2000);
//
////$('.bus-active').on('click', function () {
////    count++;
////    $('#points').html("Punkty: " + count);
////});
////
////$('.bus-no-active').on('click', function () {
////    count -= 10;
////    $('#points').html("Punkty: " + count);
////});
//
////setTimeout(jakas, 3000);
//
////$('.bus-active').on('click', function () {
////        count++;
////        $('#points').html("Punkty: " + count);
////    });
////
////    $('.bus-no-active').on('click', function () {
////        count -= 10;
////        $('#points').html("Punkty: " + count);
////    });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
