const cuerpo = document.body;
const boton1 = document.querySelector('#eventoUno');
const boton2 = document.querySelector('#eventoDos');
const parrafoSpan = document.querySelector('#parrafoSpan');
const parrafoCompleto = document.querySelector('#parrafoCompleto');
const imagen = document.querySelector('#coder');


// elemento.addEventListener("Tipo de Evento", la Funcion);

boton1.addEventListener("click", () => {
    cuerpo.style.backgroundColor = "violet";
})

boton2.onclick = () => { cuerpo.style.backgroundColor = "white" };

parrafoSpan.addEventListener("mouseover", () => {
    parrafoCompleto.style.color = 'red';
})

// imagen.addEventListener("mouseover", () => {
//     imagen.style.width = "110%";
// })



const nombreProducto = document.querySelector('#nombreProducto');
const nombrePersona = document.querySelector('#nombrePersona');



nombreProducto.onchange = () => {
    console.log("Cambiando el Valor del Input: " + nombreProducto.value);
}

nombrePersona.addEventListener('input', () => {
    console.log(nombrePersona.value);
})


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