/**
 * Created by agniecha on 2016-02-08.
 */
var numer = Math.floor(Math.random() * 5) + 1;

function ustawslajd(nrslajdu){
clearTimeout(timer1);
    clearTimeout(timer2);
    schowaj();
    setTimeout()
}
function schowaj() {
    $('#slajder').fadeOut(500);
}
function zmienslajd() {
    numer++; if (numer > 5)numer = 1;
    var plik = "<img src=\"../images/slajd" + numer + ".png\"/>";
    document.getElementById('slajder').innerHTML = plik;
    $('#slajder').fadeIn(300);
    setTimeout('zmienslajd()', 300);
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
    document.getElementById('zegar').innerHTML = dzien + '/ ' + miesiac + '/ ' + rok + " " + " " + godzina + ": " + minuta + ": " + sekunda;
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

function addBox (){
    document.getElementsByClassName('dodatkowybox').innerHTML +=document.getElementsByClassName('dodatkowybox').innerHtml + ""

}
