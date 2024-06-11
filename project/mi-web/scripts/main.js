
// Imagen dinámica
let miImagen = document.querySelector('img');

/**
 * Cambia la fuente de la imagen entre dos opciones.
 */
function cambiarImg() {
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === 'images/logo-google.png') {
        miImagen.setAttribute('src', 'images/logo-google2.webp');
    } else {
        miImagen.setAttribute('src', 'images/logo-google.png');
    }
}

// Perosonalización de mensaje de título principal
let miTitulo = document.querySelector('h1');

/**
 * Solicita al usuario que ingrese su nombre, lo almacena en el almacenamiento local
 * y actualiza el contenido del elemento <h1> con un mensaje personalizado.
 */
function enviarNombreUsuario() {
    let miNombre = prompt('Ingrese su nombre por favor:');
    
    // Si no hay nombre
    if (!miNombre) {
        enviarNombreUsuario();
    } else {
        localStorage.setItem('name', miNombre);
        miTitulo.innerHTML = 'Google es genial, ' + miNombre;
    }
}



// Recuperar nombre de usuario desde navegador
if (localStorage.getItem('name')) {
    let nombreAlmacenado = localStorage.getItem('name');
    miTitulo.innerHTML = 'Google es genial, ' + nombreAlmacenado;
} else {
    enviarNombreUsuario();
}

