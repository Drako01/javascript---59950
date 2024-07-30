// const arrayDeNumerosVacio = [];
// console.log(arrayDeNumerosVacio)

// arrayDeNumeros = 1;
// console.log(arrayDeNumeros)

// const arrayDeNumerosLleno = [1, 2, 3, 89, 8, 8];
// console.log(arrayDeNumerosLleno);
// console.log(arrayDeNumerosLleno[3]); //89
// let calculoDeSuma = arrayDeNumerosLleno[3] + arrayDeNumerosLleno[5]; // 89 + 8 = 97
// console.log(calculoDeSuma);

// const arrayDeNumerosLlenoDeStrings = ["Hola", "a", "todos"];
// // console.log(arrayDeNumerosLlenoDeStrings);
// // console.log(arrayDeNumerosLlenoDeStrings[2]);

// const arrayDeBooleanos = [true, false, false, true];
// // console.log(arrayDeBooleanos);

// let sumaDeBooleans = arrayDeBooleanos[0] + arrayDeBooleanos[3]; //Funciona como Operacion
// console.log(sumaDeBooleans);

// let sumaDeBoolConString = arrayDeBooleanos[0] + arrayDeNumerosLlenoDeStrings[0]; // Funciona como concatenacion
// console.log(sumaDeBoolConString);


// const arrayDeNumerosLleno = [1, 2, 3, 89, 8, 8, 7, 12, 7, 13]; // 6 Elementos
// console.log(arrayDeNumerosLleno)
// for ( let i = 0; i < 6; i++) {
//     console.log("El indice Nro: " + i + 
//         " contiene el Elemento: " + arrayDeNumerosLleno[i])
// }

// console.log("Usando length")
// for ( let i = 0; i < arrayDeNumerosLleno.length; i++) {
//     console.log("El indice Nro: " + i + 
//         " contiene el Elemento: " + arrayDeNumerosLleno[i])
// }
// console.log("Usando length, hay " + arrayDeNumerosLleno.length + " elementos en el Array"); 

// // Agregar elementos al Final del Array
// arrayDeNumerosLleno.push(123);
// console.log(arrayDeNumerosLleno);
// // Agregar elementos al Principio del Array
// arrayDeNumerosLleno.unshift(321);
// console.log(arrayDeNumerosLleno);
// // Para borrar Elementos usamos el pop para Eliminar el Ultimo
// arrayDeNumerosLleno.pop();
// console.log(arrayDeNumerosLleno);
// // Para borrar Elementos usamos el shift para Eliminar el Primero
// arrayDeNumerosLleno.shift();
// console.log(arrayDeNumerosLleno);

// // splice 
// arrayDeNumerosLleno.splice(4, 1);
// console.log(arrayDeNumerosLleno);

// join
// const arrayDeStrings = ["Hola", "a", "todos"];
// console.log(arrayDeStrings);
// console.log(arrayDeStrings.join(""));
// console.log(arrayDeStrings.join(" "));
// console.log(arrayDeStrings.join(" - "));
// console.log(arrayDeStrings.join(" | "));


// const arrayDeNumerosLleno = [1, 2, 3, 89, 8, 8, 7, 12, 7, 13];
// console.log(arrayDeNumerosLleno.join(" + "));

// const nombres1 = ["Sharon", "Jose", "Harold"];
// const nombres2 = ["Juan", "Juan", "David", "Fabian", "Mario"];
// // concat
// const nombresConcatenados = nombres1.concat(nombres2);
// console.log(nombresConcatenados);

// const arrayDePrueba = [1, "Abc", true, 2.5];
// console.log(nombresConcatenados.concat(arrayDePrueba));

// // Slice
// const nuevoArrayConSlice = nombresConcatenados.slice(2, 6);
// console.log(nuevoArrayConSlice);

// IndexOf devuelve el Indice

// console.log(nuevoArrayConSlice.indexOf("Juan")); // 1
// console.log(nuevoArrayConSlice.indexOf("Juan")); // 1
// console.log(nuevoArrayConSlice.indexOf("Sharon")); // -1 => Que no existe

// // includes, devuelve un Booleano
// console.log(nuevoArrayConSlice.includes("Juan"));  // true
// console.log(nuevoArrayConSlice.includes("Sharon"));  // false

// reverse
// console.log(nuevoArrayConSlice.reverse()); // Modifica el Array Original


// Array de Objetos
// const objeto1 = { nombre: "banana", precio: 1200 };
// const objeto2 = { nombre: "manzana", precio: 1450 };

// const arrayDeFrutas = [objeto1, objeto2, { nombre: "frutilla", precio: 1680 }];

// arrayDeFrutas.push({ nombre: "pera", precio: 1350 });
// console.log(arrayDeFrutas);

// for (const frutas of arrayDeFrutas) {
//     console.log("En nombre de la Fruta es: "+ frutas.nombre);
//     console.log("Su precio es: $" + frutas.precio);
// }

// class Producto {
//     constructor(nombre, precio, stock) {
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.stock = parseInt(stock);
//     }

//     sumarIva() {
//         this.precio = this.precio * 1.21;
//     }

//     mostrarNombre () {
//         console.log("El nombre de la Fruta es: " + this.nombre);
//     }
// }

// const productos = [];

// productos.push(new Producto("Banana", "1000.5", "12"));
// productos.push(new Producto("Manzana", "950.5", "56"));
// productos.push(new Producto("Pera", "895.5", "36"));
// productos.push(new Producto("Frutilla", "1400.5", "120"));

// for( const fruta of productos) {
//     fruta.sumarIva();
// }
// for( const fruta of productos) {
//     fruta.mostrarNombre();
// }

// for( const producto of productos) {
//     console.log("El precio final con IVA es de: $" + producto.precio);
// }

// console.log(productos);