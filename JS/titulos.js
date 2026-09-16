document.addEventListener("DOMContentLoaded", function () {

    const titulos = document.querySelectorAll(".titulo-card");

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


    titulos.forEach(function (titulo) {

        observador.observe(titulo);

    });

});