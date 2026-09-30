function iniciarAnimacaoCards() {

    const cards = document.querySelectorAll(
        ".uniforme-card, .especial-card"
    );

    if (cards.length === 0) {
        return;
    }


    const observer = new IntersectionObserver(
        (entradas, observerAtual) => {

            entradas.forEach((entrada) => {

                if (!entrada.isIntersecting) {
                    return;
                }


                const card = entrada.target;

                card.classList.add("mostrar");

                observerAtual.unobserve(card);

            });

        },
        {
            threshold: 0.12
        }
    );


    cards.forEach((card, index) => {

        const atraso =
            (index % 5) * 60;

        card.style.transitionDelay =
            `${atraso}ms`;

        observer.observe(card);

    });

}


/* =========================================================
   VISUALIZADOR DAS CAMISAS
========================================================= */

function iniciarVisualizador() {

    const cards = document.querySelectorAll(
        ".uniforme-card, .especial-card"
    );


    cards.forEach((card) => {

        const imagem =
            card.querySelector("img");


        if (!imagem) {
            return;
        }


        card.addEventListener("click", () => {

            abrirVisualizador(imagem);

        });

    });

}


/* =========================================================
   ABRIR VISUALIZADOR
========================================================= */

function abrirVisualizador(imagem) {

    if (
        document.querySelector(
            ".visualizador-uniforme"
        )
    ) {
        return;
    }


    const visualizador =
        document.createElement("div");


    visualizador.className =
        "visualizador-uniforme";


    visualizador.innerHTML = `

        <button
            class="fechar-visualizador"
            aria-label="Fechar imagem">

            ×

        </button>


        <img
            src="${imagem.src}"
            alt="${imagem.alt}">

    `;


    document.body.appendChild(
        visualizador
    );


    document.body.style.overflow =
        "hidden";


    requestAnimationFrame(() => {

        visualizador.classList.add(
            "ativo"
        );

    });


    const botaoFechar =
        visualizador.querySelector(
            ".fechar-visualizador"
        );


    botaoFechar.addEventListener(
        "click",
        fecharVisualizador
    );


    visualizador.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target ===
                visualizador
            ) {

                fecharVisualizador();

            }

        }
    );


    document.addEventListener(
        "keydown",
        fecharComEsc
    );


    function fecharComEsc(evento) {

        if (evento.key === "Escape") {

            fecharVisualizador();

        }

    }


    function fecharVisualizador() {

        visualizador.classList.remove(
            "ativo"
        );


        document.body.style.overflow =
            "";


        document.removeEventListener(
            "keydown",
            fecharComEsc
        );


        setTimeout(() => {

            visualizador.remove();

        }, 250);

    }

}

