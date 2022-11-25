let foto = ['muffins.webp', 'torta.webp', 'niidea.webp','go.webp'];
let contador = 0;

function funcionCarrousel() {
    let contenedor = document.querySelector(".carrousel");
    contenedor.addEventListener('click', e => {
        let derecha = contenedor.querySelector(".derecha");
        let izquierda = contenedor.querySelector(".izquierda");
        let imagenes = contenedor.querySelector(".foto1");
        let target = e.target;

        if (target == izquierda) {
            if (contador > 0) {
                imagenes.src = foto[contador - 1];
                contador--;
            } else {
                imagenes.src = foto[foto.length - 1];
                contador = foto.length;
            }
        } else if (target == derecha) {
            if (contador < foto.length - 1) {
                imagenes.src = foto[contador + 1];
                contador++;
            } else {
                imagenes.src = foto[0];
                contador = 0;
            }
        }});
}
funcionCarrousel();
