

$(document).ready( function() {

    //var losPrzystanku = Math.round(Math.random()*2);

    var timer = 100000;

    var pkt = 0;
    var bs1 = $('#busstop1');

    var czas = 10;

    bs1.addClass('aktywny');
    $('.aktywny').click(function () {
        pkt++;
        $(this).html('Pasażerowie: '+pkt);
        console.log(czas);

        if (czas>0) {
            czas--;
        } else {
            bs1.off('click');
            $('#punkty').html('Koniec!');
        }



        return;
    });




});


