
var imagenes1 = ["images_noticias/copa_gestion.avif", "images_noticias/gareca_infobae.avif", "images_noticias/gareca_libero.jfif"];
var imagenes2 = ["images_noticias/israel_firma_rpp.webp", "images_noticias/uefa_larepublica.png", "images_noticias/israel_peru21.avif"];

var indice1 = 0;
var indice2 = 0;

function cambiarImagen() {
    indice1++;
    indice2++;
    if (indice1 >= imagenes1.length) {
        indice1 = 0;
    }
    if (indice2 >= imagenes2.length) {
        indice2 = 0;
    }
    document.getElementById("imagen1").src = imagenes1[indice1];
    document.getElementById("imagen2").src = imagenes2[indice2];
}
setInterval(cambiarImagen, 3000);