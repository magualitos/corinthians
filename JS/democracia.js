document.addEventListener("DOMContentLoaded", function () {

    const elementos = document.querySelectorAll(
        ".card-protagonista, .bloco, .momento, .secao-introducao, .alem-futebol, .legado"
    );

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


    elementos.forEach(function (elemento) {

        elemento.classList.add("animar");

        observador.observe(elemento);

    });

});