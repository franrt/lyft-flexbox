//La idea es q aparezca el nav transp y mediante una funcion event onscroll aparece el nav con .hidden//

function cambioColor() {
    var distancia = window.pageYOffset || document.documentElement.scrollTop;
    var nuevonav = document.getElementById("nav");
    var logo = document.getElementById("logo"); //el logo blanco
    var boton = document.getElementById("btnTwo");

    if (distancia > 100) {
        nuevonav.classList.add("nuevoNav");
        logo.setAttribute("src", "assets/images/logo-pink.png");
        boton.classList.remove("hidden")
        document.getElementById("btnTwo").setAttribute("visible", true); //
    } else {
        nuevonav.classList.remove("nuevoNav"); //así remuevo este nav nuevo y vuelvo al inicial cuando estoy a menos de 100px de distancia
        logo.setAttribute("src", "assets/images/logo-white.png");
        boton.classList.add("hidden");
    }
}
window.addEventListener("scroll", cambioColor);