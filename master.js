let who = ['the dog', 'my granma', 'his turtle', 'my bird'];
let what = ['eat', 'pissed', 'crushed', 'broked'];
let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];


document.getElementById("btn1").onclick = function () {
    var posicion1 = Math.floor(Math.random() * who.length - 1) + 1;
    var posicion2 = Math.floor(Math.random() * what.length - 1) + 1;
    var posicion3 = Math.floor(Math.random() * when.length - 1) + 1;

    var conca = who[posicion1] + " " + what[posicion2] + " " + when[posicion3];
    document.getElementById("excuse").innerHTML = conca;
}