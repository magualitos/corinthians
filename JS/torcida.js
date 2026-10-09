
/* =====================================================
   MUSEU CORINTHIANS — A FIEL TORCIDA
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  

    // ================================================
    // ANIMAÇÕES AO ROLAR A PÁGINA
    // ================================================

    const elementos = document.querySelectorAll(".revelar");

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(
            function (entradas, observadorAtual) {

                entradas.forEach(function (entrada) {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add("mostrar");

                        observadorAtual.unobserve(entrada.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        elementos.forEach(function (elemento) {
            observador.observe(elemento);
        });

    } else {

        // Alternativa para navegadores sem IntersectionObserver.

        elementos.forEach(function (elemento) {
            elemento.classList.add("mostrar");
        });

    }

});