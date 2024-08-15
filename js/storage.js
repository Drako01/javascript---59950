// Evento Submmit
let formulario = document.querySelector('#formulario');
let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let email = document.getElementById('email');

formulario.addEventListener("submit", (e) => {
    // e.preventDefault();
    let form = e.target;

    const nombreStorage = form.children[0].value;
    const edadStorage = form.children[1].value;
    const emailStorage = form.children[2].value;

    localStorage.setItem("nombre", nombreStorage);
    localStorage.setItem("edad", edadStorage);
    localStorage.setItem("email", emailStorage);

})

nombre.innerHTML = localStorage.getItem("nombre");
edad.innerHTML = localStorage.getItem("edad");
email.innerHTML = localStorage.getItem("email");

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    // console.log("Clave: " + clave);
    // console.log("Valor: " + localStorage.getItem(clave))
}


// localStorage.setItem("carrito", "Manzana");
// sessionStorage.setItem("carrito", "Banana");

// let carrito = localStorage.getItem("carrito");
// console.log(carrito);

const clearLS = document.getElementById("clearLS");

clearLS.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
})

const borrarNombre = document.getElementById("borrarNombre");
const borrarEdad = document.getElementById("borrarEdad");
const borrarEmail = document.getElementById("borrarEmail");

borrarNombre.addEventListener("click", () => {
    localStorage.removeItem("nombre");
})
borrarEdad.addEventListener("click", () => {
    localStorage.removeItem("edad");
})
borrarEmail.addEventListener("click", () => {
    localStorage.removeItem("email");
})

// const producto = {
//     nombre: "Azucar",
//     precio: 1080,
//     stock: 100
// }
// const productoJSON = JSON.stringify(producto);
// console.log( producto);
// console.log( productoJSON);

// // localStorage.setItem("producto", producto);
// localStorage.setItem("producto", productoJSON); // JSON
// localStorage.setItem("Nombre de producto", producto.nombre);
// const productoParseado = JSON.parse(localStorage.getItem("producto")); // Parsear a Objeto
// console.log(typeof productoParseado);
// localStorage.setItem("Nombre de producto en JSON", productoParseado.nombre);


const productos = [
    {
        nombre: "Azucar",
        precio: 1080,
        stock: 100
    },
    {
        nombre: "Yerba",
        precio: 1200,
        stock: 120
    },
    {
        nombre: "Leche",
        precio: 900,
        stock: 1000
    },
    {
        nombre: "Café",
        precio: 8000,
        stock: 1000
    }
]

const carrito = [];

const guardarEnElLocalStorage = (key, value) => { localStorage.setItem(key, value) };

// for (const producto of productos) {
//     guardarEnElLocalStorage(producto.nombre, JSON.stringify(producto));
// }

// guardarEnElLocalStorage("productos", JSON.stringify(productos));

// for (const producto of productos) {
//     carrito.push(producto);
// }

carrito.push(productos[0]);
carrito.push(productos[1]);

guardarEnElLocalStorage("carrito", JSON.stringify(carrito));