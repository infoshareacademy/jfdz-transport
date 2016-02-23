$(document).ready(function() {

    var bus1 = {
      number: '1',
      timer: '',
      passengers: '',
      points: ''
    };

    var busstop = {
        number: '1',
        ifThereisBus: false
    };

    var count = 0;

    function setTime() {

        var sec = $('.second').text()
        var timer = setInterval(function () {
            $('.second').text(--sec);
            if (sec == 0) {
                $('.second').fadeOut('fast');
                $('.finish').delay(500).fadeIn(500);

                //clearInterval(timer);
            }

        }, 1000);
    }

$('input').on('click', setTime);



        $('#busstop1').on('click', function(){
            count++;
           $('#points').html("Punkty: " + count);
        });

        $('#busstop2').on('click', function(){
            count-= 10;
            $('#points').html("Punkty: " + count);
        });


    function getBus() {
        x1 = Math.floor((Math.random() * 3) + 1);
        console.log(x1);
        return x1;
    }

    if (x1 = bus1.number) {
        $('#bus1').addClass('bus-color');
    } else {
        $('#bus1').removeClass('bus-color');
    }

    function setBusStop() {
        x2 = Math.floor((Math.random()* 3) +1);
        console.log(x2);
    }

});

//function getBus() {
//
//}
//
//function setTimeBus() {
//
//}


