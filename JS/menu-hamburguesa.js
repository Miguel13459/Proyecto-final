const menu = document.querySelector('#menu');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    menu.classList.add("visible");
})

cerrar.addEventListener('click', () => {
    menu.classList.remove("visible");
})
/*document.querySelector(".barra-menu").addEventListener("click", animateBars);

const lineaBarra1 = document.querySelector(".linea1-barra");
const lineaBarra2 = document.querySelector(".linea2-barra");
const lineaBarra3 = document.querySelector(".linea3-barra");
const contenedorMenu = document.querySelector(".menu");
const menuPrimBar = document.querySelector("#prim-bar");
const menuBotones = document.querySelector("#bot");
const desBar = document.querySelector("#desaparecer");

function animateBars(){
    lineaBarra1.classList.toggle("activelinea1-barra");
    lineaBarra2.classList.toggle("activelinea2-barra");
    lineaBarra3.classList.toggle("activelinea3-barra");

    contenedorMenu.classList.toggle("menu-activo")
    menuPrimBar.classList.toggle("PrimBar-activo")
    menuBotones.classList.toggle("Botones-activo")
    desBar.classList.toggle("des-bar")
}*/