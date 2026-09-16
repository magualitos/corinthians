document.addEventListener("DOMContentLoaded", function () {

    const estadios = document.querySelectorAll(".estadio");

    console.log("ESTÁDIOS ENCONTRADOS:", estadios.length);

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


    estadios.forEach(function (estadio) {

        observador.observe(estadio);

    });

});