/**
 * Created by agnieszkacieslawska on 06.12.15.
 */

$(document).ready( function() {

    var z = 100;

    $('#moveM').mousemove( function() {
        console.log('DZIALA');


        if (z == 0) {
            $('#pole').html('Formularz odblokowany');
            $('#przycisk').removeAttr('disabled');

        } else {
            $('#pole').html(z -= 1);
            $('#przycisk').removeClass('button:hover');
        }
    });

});
