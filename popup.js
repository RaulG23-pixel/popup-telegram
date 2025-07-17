
let btnOcultar = document.querySelector(".btn_ocultar");
let btnTelegram = document.querySelector(".btn_telegram button");
let btnCross = document.querySelector(".btn_cross button");
btnCross.addEventListener("click", function() {
    let popupContainer = document.querySelector("#telegramPopupOverlay");
    popupContainer.style.display = "none"; // Oculta el contenedor del popup
});
btnTelegram.addEventListener("click", function() {
    let popupContainer = document.querySelector("#telegramPopupOverlay");
    popupContainer.style.display = "flex"; // Muestra el contenedor del popup
});
btnOcultar.addEventListener("click", function() {
    let popupContainer = document.querySelector("#telegramPopupOverlay");
    popupContainer.style.display = "none"; // Oculta el contenedor del popup// Establece la cookie para no mostrar el popup nuevamente
});
