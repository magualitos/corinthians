window.onload = function() {
    document.getElementById("Ct").classList.add("fadeInDown");
    document.getElementById("Ct2").classList.add("fadeInDown");
    document.getElementById("sub").classList.add("fadeInDown");
};

document.addEventListener("DOMContentLoaded", function () {

    const botaoMenu = document.getElementById("botaoMenu");
    const header = document.querySelector(".header");

    if (botaoMenu && header) {

        botaoMenu.addEventListener("click", function () {

            header.classList.toggle("aberto");

        });

    }

});