// Objetos

// let nombreProducto = "Azucar";
// let precioProducto = 1000;
// let categoriaProducto = "Almacen";
// console.log(nombreProducto);
// console.log(precioProducto);
// console.log(categoriaProducto);

// let nombreProducto1 = "Yerba";
// let precioProducto1 = 1200;
// let categoriaProducto1 = "Almacen";
// console.log(nombreProducto1, precioProducto1, categoriaProducto1)


// Definir Objeto Producto
// const producto1 = {
//     nombre: "Azucar",
//     precio: 1000,
//     categoria: "Almacen"
// };
// console.log(producto1);
// console.log(producto1.nombre);
// console.log(producto1.precio);
// console.log(producto1.categoria);

// const producto2 = {
//     nombre: "Yerba",
//     precio: 1200,
//     categoria: "Almacen"
// };
// console.table(producto2);
// console.log(producto2["nombre"]);
// console.log(producto2["precio"]);
// console.log(producto2["categoria"]);

// producto1.categoria = "Dulces"; // Reasignacion de Valor
// producto1.precio = 1200;

// Constructores

// function Producto (nombre, precio, categoria) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.categoria = categoria;
// }

// const producto3 = new Producto("Azucar", 1000, "Almacen");
// console.log(producto3);
// const producto4 = new Producto("Yerba", 1200, "Almacen");
// console.log(producto4);

// function Producto1 (objeto) {
//     this.nombre = objeto.nombre;
//     this.precio = objeto.precio;
//     this.categoria = objeto.categoria;
// }

// const producto5 = new Producto1({
//     nombre: "Yerba",
//     precio: 1200,
//     categoria: "Almacen"
// })

// console.log(producto5);

// Crear un Auto
// function Auto(marca, color, precio, modelo, cilindraje) {
//     this.marca = marca;
//     this.color = color;
//     this.precio = precio;
//     this.modelo = modelo;
//     this.cilindraje = cilindraje;
// }

// const auto1 = new Auto("Ford", "Azul", 100000, 2024, "2.0");
// const auto2 = new Auto("Toyota", undefined, null, 2024, "");
// console.log(auto1);
// console.log(auto2);

// Diferencia entre Funciones y Metodos
// function Auto(marca, color, precio, modelo, cilindraje) {
//     this.marca = marca;
//     this.color = color;
//     this.precio = precio;
//     this.modelo = modelo;
//     this.cilindraje = cilindraje;
//     this.encender = function () {
//         console.log("El Auto esta encendido.!")
//     }
//     this.apagar = function () {
//         console.log("El Auto esta apagado.!")
//     }
// }
// const auto3 = new Auto("Ford", "Azul", 100000, 2024, "3.0");
// console.log(auto3);
// auto3.encender();
// auto3.apagar();

// function Moto(marca, color, precio, modelo, cilindraje) {
//     this.marca = marca;
//     this.color = color;
//     this.precio = precio;
//     this.modelo = modelo;
//     this.cilindraje = cilindraje;
//     this.encender = function () {
//         console.log("La Moto esta encendida.!")
//     }
//     this.apagar = function () {
//         console.log("La Moto esta apagada.!")
//     }
// }

// const moto1 = new Moto("Toyota", "Verde", 12000, 2022, "1.0");
// console.log(moto1)
// moto1.encender();
// moto1.apagar();


// const IVA = 1.21;
// function Producto (nombre, precio, categoria) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.categoria = categoria;

//     this.precioFinal = function () {
//         this.precio = precio * IVA;        
//     } 
// }

// const producto10 = new Producto("Azucar", 1000, "Almacen");
// console.log(producto10);
// producto10.precioFinal();


// function Auto(marca, color, precio, modelo, cilindraje) {
//     this.marca = marca;
//     this.color = color;
//     this.precio = precio;
//     this.modelo = modelo;
//     this.cilindraje = cilindraje;
//     this.encender = function () {
//         console.log("El Auto esta encendido.!")
//     }
//     this.apagar = function () {
//         console.log("El Auto esta apagado.!")
//     }
// }
// const auto3 = new Auto("Ford", "Azul", 100000, 2024, "3.0");
// console.log(auto3);
// auto3.encender();
// auto3.apagar();

// console.log("marca" in auto3); // true
// console.log("nombre" in auto3);  // false

// for (const caracteristica in auto3 ) {
//     console.log(auto3[caracteristica])
// }


// Clases
class Vehiculo {
    constructor(tipo, marca, color, precio, modelo, cilindraje) {
        this.tipo = tipo;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.modelo = modelo;
        this.cilindraje = cilindraje;
    }
    encender() {
        console.log("El/La " + this.tipo + " esta encendido/a.!")
    }
    apagar() {
        console.log("El/La " + this.tipo + "  esta apagado/a.!")
    }
}

const auto = new Vehiculo("Auto", "Ford", "Azul", 100000, 2024, "3.0");
console.log(auto);
const moto = new Vehiculo("Moto", "Toyota", "Verde", 12000, 2022, "1.0");
console.log(moto);
auto.encender();
auto.apagar();
moto.encender();
moto.apagar();