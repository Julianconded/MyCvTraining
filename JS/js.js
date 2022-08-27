
const botondark = document.getElementById("dark");

botondark.addEventListener("click", cambio);

function cambio() {
    var body = document.querySelector('.body');
    body.classList.toggle('change-dark');

    var main = document.querySelector('.main');
    main.classList.toggle('change-dark');

    var cajaGris = document.querySelector('.CajaGris');
    cajaGris.classList.toggle('change-dark');

    var cajaGris2 = document.querySelector('.CajaGris2');
    cajaGris2.classList.toggle('change-dark');

    var cajaGris3 = document.querySelector('.CajaGris3');
    cajaGris3.classList.toggle('change-dark');

    var info = document.querySelector('.footer');
    footer.classList.toggle('change-dark');

    var hs1 = document.querySelector('h1');
    hs.classList.toggle('change-dark');
    
    var hs3 = document.querySelector('h3');
    hs3.classList.toggle('change-dark');

    var footer = document.querySelector('.footer');
    footer.classList.toggle('change-dark');

    var titulo = document.querySelector('.titulo');
    titulo.classList.toggle('change-dark');

    var tituloSeg = document.querySelector('.tituloSeg');
    tituloSeg.classList.toggle('change-dark');

    var SubtituloHome = document.querySelector('.SubtituloHome');
    SubtituloHome.classList.toggle('change-dark');

}



