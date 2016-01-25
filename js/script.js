/**
 * Created by agnieszkacieslawska on 06.12.15.
 */

$(document).ready( function() {

    var z = 100;

    $('#moveM').mousemove( function() {
        console.log('DZIALA');


        if (z == 0) {
            $('#pole').html('<h4>Formularz odblokowany</h4>');
            $('#przycisk').removeAttr('disabled');

        } else {
            $('#pole').html(z -= 1);
            $('.mmwidth').width(z+'%');
        }
    });

});
