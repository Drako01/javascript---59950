const cuerpo = document.body;
const header = document.querySelector('#header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

const enlaces = [
    {
        link: "index",
        nombre: "Inicio"
    },
    {
        link: "products",
        nombre: "Productos"
    },
    {
        link: "contact",
        nombre: "Contacto"
    }
]

header.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = "navbar";

for (const link of enlaces) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.link}.html">${link.nombre}</a>`;
    ul.appendChild(li);
}
header.style.backgroundColor = '#c2c2c2';
let modo = localStorage.getItem("Modo");

document.addEventListener("DOMContentLoaded", function () {
    const botonDark = document.getElementById('toggle-button');
    botonDark.className = 'button_grey';

    modo === 'dark-mode' && cuerpo.classList.add("dark-mode")

    botonDark.addEventListener("click", () => {
        cuerpo.classList.toggle("dark-mode");
        setLocalStorageModeDark();
        updateTextButton();
    })

    function updateTextButton() {
        if (cuerpo.classList.contains('dark-mode')) {
            botonDark.textContent = "Cambiar a Modo Claro";
        } else {
            botonDark.textContent = "Cambiar a Modo Oscuro";
            localStorage.removeItem("Modo");
        }
    }

    function setLocalStorageModeDark() {
        cuerpo.classList.contains('dark-mode') ?
        localStorage.setItem("Modo", "dark-mode") :
        localStorage.removeItem("Modo")

    }
    updateTextButton();
})