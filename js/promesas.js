// setTimeout

//setTimeout(funcionAEjecutar, retardoEnMilisegundos);

// console.log("Hola");

// setTimeout(() => {
//     console.log("Mensaje del medio");
// }, 0) // 2 Segundos despues

// console.log("Chau");

// setInterval()

// setInterval(()=>{
//     console.log("Hola gente");
// }, 2000);

//clearTimeout()
//clearInterval()

// let contador = 0;

// const interval = setInterval(() => {
//     contador++;
//     console.log("Vuelta Nro: " + contador);

//     if (contador === 10) {
//         clearInterval(interval);
//         console.log("Proceso terminado.!")
//     }
// }, 1000);


// console.log("Comenzamos...");

// const finalizar  = setTimeout(() => {
//     console.log("Proceso finalizado.!")
// }, 2000);

// clearTimeout(finalizar);

// Promesas

// const pasarDeNivel = (condicionesCumplidas) =>{
//     return new Promise((resolve, reject) => {        
//         condicionesCumplidas ?
//             resolve("Promesa resulta") :        
//             reject("Promesa Rechazada");   
//     })
// };

// console.log(pasarDeNivel(true));
// console.log(pasarDeNivel(false));

// pasarDeNivel(true)
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.error(error)
//     })
//     .finally(()=>{
//         console.log("Ejecuto el Finally de Resulta" );
//     })

// pasarDeNivel(false)
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.error(error)
//     })
//     .finally(()=>{
//         console.log("Ejecuto el Finally de Rechazada");
//     })


// Implementacion
const productosPromesa = JSON.parse(localStorage.getItem("Cart")) || [];

// [
//     {id: 1, nombre: "Azucar", precio: 1200},
//     {id: 2, nombre: "Yerba", precio: 900},
//     {id: 3, nombre: "Tacos", precio: 1350},
//     {id: 4, nombre: "Lomito", precio: 1550},
//     {id: 5, nombre: "Harina", precio: 1600},
//     {id: 6, nombre: "Fernet", precio: 10500},
// ]

const mostrarProductos = () => {
    return new Promise((resolve, reject) => {
        if (productosPromesa.length > 0) {
            setTimeout(() => {
                resolve(productosPromesa);
            }, 2000);
        } else {
            reject(
                Swal.fire({
                    title: "Promesa Rechazada",
                    text: "El Carrito esta Vacio.!!",
                    icon: "error"
                })
            );
        }
    });
}



let arrayProductos = [];

const renderizarProductos = (arr) => {
    const contenedor = document.getElementById("productos-container");
    contenedor.innerHTML = '';
    arr.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.className = 'producto';
        divProducto.innerHTML = `
            <h4>ID: ${producto.id}</h4>
            <h4>Nombre: ${producto.nombre}</h4>
            <p>Precio: $${producto.precio}.-</p>
        `;
        contenedor.appendChild(divProducto);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("sesionActiva")) {
        mostrarProductos()
            .then((res) => {
                arrayProductos = res; // Capturo todo el Array de Productos
                renderizarProductos(arrayProductos);
            })
            .catch((error) => {
                console.error("Promesa Rechazada", error);
            })
            .finally(() => {
                console.log("Fin del Renderizado");
            });

    } else {
        document.getElementById("seccion-carrito").style.display = "none";

        // Ocultar todos los elementos con la clase "carrito-click"
        document.querySelectorAll(".carrito-click").forEach((element) => {
            element.style.display = "none";
        });
    }
})