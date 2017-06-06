function cambioColor() {
    var distancia = window.pageYOffset || document.documentElement.scrollTop;
    var nuevonav = document.getElementById("nav");
    var logo = document.getElementById("logo"); //el logo blanco
    var boton = document.getElementById("btnTwo");
    var botonUno = document.getElementById("btnOne");

    if (distancia > 100) {
        nuevonav.classList.add("nuevoNav");
        logo.setAttribute("src", "assets/images/logo-pink.png");
        boton.classList.remove("hidden")
        botonUno.classList.remove("btnOne") //elimino los estilos del boton1 para reemplazar x los nuevos
        document.getElementById("btnTwo").setAttribute("visible", true); //
        botonUno.classList.add("btnUno"); //


    } else {
        nuevonav.classList.remove("nuevoNav"); //así remuevo este nav nuevo y vuelvo al inicial cuando estoy a menos de 100px de distancia
        logo.setAttribute("src", "assets/images/logo-white.png");
        boton.classList.add("hidden"); //le devuelvo la clase hidden al btn2 para q vuelva a desaparecer
        botonUno.classList.remove("btnUno"); //elimino la nueva clase y luego vuelvo a añadir la antigua
        botonUno.classList.add("btnOne");
    }
}
window.addEventListener("scroll", cambioColor);