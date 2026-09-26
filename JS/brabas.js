document.addEventListener("DOMContentLoaded", function () {


    /* ================================= */
    /*          ANIMAÇÕES                 */
    /* ================================= */

    const elementos = document.querySelectorAll(".animar");


    const observador = new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("mostrar");

                    observador.unobserve(
                        entrada.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    elementos.forEach(function (elemento) {

        observador.observe(elemento);

    });


});