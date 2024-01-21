document.addEventListener("click", function (event) {
    var menu = document.getElementById("menu");
    if (!menu.contains(event.target) && !document.querySelector(".nav_target").contains(event.target)) {
        location.hash = ""; // Limpia el fragmento de la URL para ocultar el menú
    }
});