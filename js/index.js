// Acceso a los Nodos
// getElementById
let titulo = document.getElementById("titulo").innerText;
// getElementsByClassName()
// console.log(document.getElementsByClassName("contenedor"));
const contenedores = document.getElementsByClassName("contenedor");
// console.log(contenedores);
// console.log(contenedores[0]);
// console.log(contenedores[1]);
// console.log(contenedores[2]);
// console.log(contenedores[3]);
// console.log(titulo);
// titulo = "Otra cosa"
// console.log(titulo);

// getElementsByTagName()
const main = document.getElementsByTagName("main");
// console.log(main[0]);
const secciones = document.getElementsByTagName("section");
// console.log(secciones[0].innerHTML);
secciones[2].innerHTML = "<h2>Esta es la Seccion <strong>3</strong></h2>" // Agrego contenido de forma Dinamica
// for (const seccion of secciones){
//     console.log(seccion.innerHTML);
// }
let divAModificar = document.getElementById("parrafo");
const parrafo = document.createElement("p"); // Creamos un Elemento p
parrafo.innerHTML = "Esto es un Párrafo creado dinamicamente.!"
// console.log(parrafoAModificar);
divAModificar.append(parrafo);
let inputNombre = document.createElement("input");
let inputEdad = document.createElement("input");
// parrafo.remove();
// main[0].remove();
divAModificar.appendChild(inputNombre);
divAModificar.appendChild(inputEdad);
inputNombre.id = "nombre";
inputEdad.id = "edad";
inputNombre.value = "Alejandro";
inputEdad.value = 48;


const padre = document.getElementById("padre");
const personas = ["Alejandro", "Sharon", "Carla", "David", "Roberto", "Kevin"];

for (const persona of personas){
    let li = document.createElement("li");
    li.innerHTML = persona;
    padre.appendChild(li);
}

// Plantillas Literales
let producto = {id: 1, nombre: "Azucar", precio: 1080.50};
let concatenando = "ID = " + producto.id + " nombre del Producto es: "
+ producto.nombre + " y su precio es de $ " + producto.precio
// console.log(concatenando);

let plantilla = `Id : ${producto.id} nombre del Producto es: ${producto.nombre} y su precio es de $ ${producto.precio}`;
// console.log(plantilla);
const container = document.createElement("div");
const miMain = document.getElementById("miMain");
container.innerHTML = `
                        <h3>ID: ${producto.id}</h3>
                        <p>Nombre del Producto: ${producto.nombre}</p>
                        <h4>Precio $${producto.precio}</h4>
                        `
miMain.appendChild(container);

// querySelector > Selecciona 1 solo elemento
// querySelectorAll > Selecciona todos los elementos 

const tituloH1 = document.querySelector("#titulo");
console.log(tituloH1.innerHTML);
const contenedoresDiv = document.querySelectorAll(".contenedor");
console.log(contenedoresDiv);