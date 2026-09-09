document.addEventListener("DOMContentLoaded", function () {

    // ANIMAÇÃO DO TÍTULO

    const titulo = document.getElementById("Ct");

    if (titulo) {
        titulo.classList.add("fadeInDown");
    }


    // EVENTOS DA HISTÓRIA

    const eventos = document.querySelectorAll(".evento");


    const observador = new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

                observador.unobserve(entrada.target);

            }

        });

    }, {

        threshold: 0.2

    });


    eventos.forEach(function (evento) {

        observador.observe(evento);

    });

});