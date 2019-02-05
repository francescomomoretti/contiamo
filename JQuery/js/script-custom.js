//Evento DOM Ready, con a disposizione l'albero dei nodi
$(function () {
    $("#secondodiv").css("background-color", "red");
    Cifre();
    RiempiDiv();
    IgnoranzaDiAngelini();
});

var array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 25, 50, 75, 100];

function RiempiDiv() //Riempie il div con i numeri dell'array in ordine casuale
{
    shuffle(array);
    var output = [];
    var autput = [];
    for (i = 0; i < 6; i++) {
        output.push("<div class = 'col-sm-2 border'>" + array[i] + "</div>");
        autput.push(array[i]);
    }
    $("#container").html(output);
    return autput;
}

function shuffle(arr) //Mischia l'array (it just works)
{
    for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
}

function Cifre() //Crea un numero di 3 cifre casuale e stampa ogni cifra in un div separato
{
    var output = [];
    var num = 0;
    for (i = 0; i < 3; i++) {
        var rand = Math.floor(Math.random() * 10);
        output.push("<div class = 'col-sm-4 border'>" + rand + "</div>");
        num = (num * 10) + rand;
    }
    $("#cifre").html(output);
    $("#output").text(num);
    return num;
}
//Algoritmo che prendendo i numeri e utilizzando + - * / si avvicini il più possibile al numero di 3 cifre random

/*function Ignoranza() {
    var array = RiempiDiv();
    var num = Cifre();

    var iterazioni = [0, 0, 0, 0, 0];
    var gesu = [];
    for (j = 0; j < 1024; j++) {
        var res = array[0];
        for (i = 1; i < 6; i++) {
            switch (iterazioni[i - 1]) {
                case 0:
                    res += array[i];
                    break;
                case 1:
                    res -= array[i];
                    break;
                case 2:
                    res *= array[i];
                    break;
                case 3:
                    res /= array[i];
                    break;
            }
        }
        for (i = 5; i > 0; i--) {
            if (iterazioni[i] < 3) {
                iterazioni[i]++;
                break;
            }
            else {
                iterazioni[i] = 0;
            }
        }
        gesu.push("<div>"+res+"</div>");
    }
    $("#output").html(gesu);
}*/

function IgnoranzaDiAngelini()
{
    var array = RiempiDiv();
    var num = Cifre();
    
    var somme = [];
    array.sort();

    var i = 1;
    var res = array[0];
    do
    {
        res *= array[i];
        i++;
    }
    while(res[i] < num);
    $("#output").text(res);
    /*while(res+array[i] < num)
    {
        res+=array[i];
        i++;
    }*/
}