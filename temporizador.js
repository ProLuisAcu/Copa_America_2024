
var fechaObjetivo = new Date("2024-06-21").getTime();
var temporizador = setInterval(function() {
    var fechaActual = new Date().getTime();
    var diferencia = fechaObjetivo - fechaActual;
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    document.getElementById("contador").innerHTML = dias + " Dias " + horas + " Horas "
    + minutos + " Minutos " + segundos + " Segundos ";
    if (diferencia < 0) {
        clearInterval(temporizador);
        document.getElementById("contador").innerHTML = "¡Tiempo expirado!";
    }
}, 1000);