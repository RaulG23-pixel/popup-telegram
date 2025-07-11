window.onload = function(){
    if(getCookie("popupWatched")){
        return;
    }
    mostrarPopup();
    
    
}

const botonContinuar = document.querySelector(".popup__continuar");
const botonSalir = document.querySelector(".popup__salir");
const closeButton = document.querySelector(".close_button");


closeButton.addEventListener("click", function(e) {
    cerrarPopup();
     // Set cookie to expire in 7 days
});

function mostrarPopup() {
    document.querySelector(".popup_container").style.display = "flex";
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function ocultarPopup() {
    document.querySelector(".popup_container").style.display = "none";
}

function cerrarPopup() {
    document.querySelector(".popup_container.popup_container--telegram").style.display = "none";
}