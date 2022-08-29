
const botondark = document.getElementById("dark");

botondark.addEventListener("click", cambio);

function cambio() {
    var body = document.querySelector('.body');
    body.classList.toggle('change-dark');

    var main = document.querySelector('.main');
    main.classList.toggle('change-dark');







    var titulo = document.querySelector('.titulo');
    titulo.classList.toggle('change-dark');

    var tituloSeg = document.querySelector('.tituloSeg');
    tituloSeg.classList.toggle('change-dark');

    var SubtituloHome = document.querySelector('.SubtituloHome');
    SubtituloHome.classList.toggle('change-dark');

}



