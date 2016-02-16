/**
 * Created by agniecha on 2016-02-08.
 */
var numer = Math.floor(Math.random()*5)+1;
var timer1 = 0;
var timer2 = 0;

function ustawslajd(nrslajdu)
{
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nrslajdu - 1;

    schowaj();
    setTimeout("zmienslajd()", 500);

}

function schowaj()
{
    $("#slider").fadeOut(500);
}

function zmienslajd()
{
    numer++; if (numer>5) numer=1;

    var plik = "<img src=\"slajd" + numer + ".png\" />";

    document.getElementById("slider").innerHTML = plik;
    $("#slider").fadeIn(500);

    timer1 = setTimeout("zmienslajd()", 5000);
    timer2 = setTimeout("schowaj()", 4500);

}


function odliczanie() {
    var dzisiaj = new Date();

    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth() + 1;
    var rok = dzisiaj.getFullYear();
    var godzina = dzisiaj.getHours();
    if (godzina < 10)godzina = "0" + godzina;
    var minuta = dzisiaj.getMinutes();
    if (minuta < 10)minuta = "0" + minuta;
    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10)sekunda = "0" + sekunda;
    document.getElementById('zegar').innerHTML = dzien + ' / ' + miesiac + ' / ' + rok + " " + " " + godzina + ": " + minuta + ": " + sekunda;
    setTimeout('odliczanie()', 1000);
}
onload(odliczanie());

function sprawdz() {
    var liczba = document.getElementById('pole').value;
    if (liczba > 0) document.getElementById('wynik').innerHTML = 'dodatnia';
    else if (liczba < 0) document.getElementById('wynik').innerHTML = 'ujemna';
    else if (liczba == 0)document.getElementById('wynik').innerHTML = "zero";
    else document.getElementById('wynik').innerHTML = "to nie jest liczba";
}

function wypisz() {
    var liczba1 = document.getElementById('pole1').value;
    var liczba2 = document.getElementById('pole2').value;
    var napis = "";
    for (i = liczba1; i <= liczba2; i++) {
        napis = napis + i + " ";
    }
    document.getElementById('ciagliczb').innerHTML = napis;
}

$(document).ready(function () {


    $('.dodatkowybox').click (function()
     {
        var toWidth = $(this).width() * 200,
            toHeight = $(this).height() * 200;
        $(this).animate({
            width:  toWidth,
            height: toHeight
        }, 1000);


    });
})

//document.querySelector("#content").getBoundingClientRect().top
//var pozycja = $("#content").position()
//var pozycjaY = pozycja.top; //pozycja Y elementu div#content
