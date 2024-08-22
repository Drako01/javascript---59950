
const boton1 = document.querySelector('#eventoUno');
const boton2 = document.querySelector('#eventoDos');
const parrafoSpan = document.querySelector('#parrafoSpan');
const parrafoCompleto = document.querySelector('#parrafoCompleto');
const imagen = document.querySelector('#coder');


// elemento.addEventListener("Tipo de Evento", la Funcion);

boton1.addEventListener("click", () => cuerpo.style.backgroundColor = "violet")

boton2.onclick = () => cuerpo.style.backgroundColor = "white";

parrafoSpan.addEventListener("mouseover", () => parrafoCompleto.style.color = 'red')

// imagen.addEventListener("mouseover", () => {
//     imagen.style.width = "110%";
// })



const nombreProducto = document.querySelector('#nombreProducto');
const nombrePersona = document.querySelector('#nombrePersona');



// nombreProducto.onchange = () => {
//     console.log("Cambiando el Valor del Input: " + nombreProducto.value);
// }

// nombrePersona.addEventListener('input', () => {
//     console.log(nombrePersona.value);
// })

