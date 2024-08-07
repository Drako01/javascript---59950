// Clase 08
// const PI = Math.PI;
// console.log(PI);
// console.log(Math.PI);

// const E = Math.E;
// console.log(E);

// Min y Max
// console.log(Math.min(-1, 5, 9, 125, -500, 1000, -236))
// console.log(Math.max(-1, 5, 9, 125, -500, 1000, -236))


const PI = Math.PI;
const E = Math.E;
const A = -6.59;
const B = 5.12;
const C = 0.49;

// CEIL
// console.log(Math.ceil(PI)); // 4
// console.log(Math.ceil(E)); // 3
// console.log(Math.ceil(A)); // -6
// console.log(Math.ceil(B)); // 6
// console.log(Math.ceil(C)); // 1

// FLOOR
// console.log(Math.floor(PI)); // 3
// console.log(Math.floor(E)); // 2
// console.log(Math.floor(A)); // -7
// console.log(Math.floor(B)); // 5
// console.log(Math.floor(C)); // 0

// ROUND
// console.log(Math.round(PI)); // 3
// console.log(Math.round(E)); // 3
// console.log(Math.round(A)); // -7
// console.log(Math.round(B)); // 5
// console.log(Math.round(C)); // 0

// Square Root
// console.log(Math.sqrt(9)); // 3
// console.log(Math.sqrt(1)); // 1
// console.log(Math.sqrt(0)); // 0
// console.log(Math.sqrt(-16)); // NaN
// console.log(Math.sqrt(16)); // 4
// Pow
// console.log(Math.pow(9, 2)); // 81
// console.log(Math.pow(9, (1/2))); // 3

// Random
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// Numeros entre 0 y 100
// console.log(Math.round(Math.random() * 100));

// Numeros entre 100 y 200
// console.log(Math.round(Math.random() * 100) + 100);

// const generadorNum = () => Math.round(Math.random() * 100);

// for (let i = 0; i <= 5; i++) {
//     console.log(generadorNum());
// }

// console.log(Math.cbrt(8)); // Raiz cúbica
// console.log(Math.cbrt(27));
// console.log(Math.cbrt(-27));
// console.log(Math.cbrt(125));

// // Clase Date
// console.log(new Date());
// // Construir una Fecha > 12/04/1993
// console.log(new Date(1993, 3, 12));
// // Construir una Fecha > 12/04/1993 08:40 hr
// console.log(new Date(1993, 3, 12, 20, 40, 0));
// Construir la fecha de Navidad
// const casiNavidad = new Date(2024, 11, 24, 23, 59, 59);
// console.log(casiNavidad);

// console.log(casiNavidad.getFullYear());
// Como obtengo el Año actual??
// const fechaActual = new Date();
// console.log(fechaActual.getFullYear()); // 2024

// console.log(fechaActual.getMonth() + 1);
// console.log(fechaActual.getDay()); // 1 = Lunes

// console.log(fechaActual.toLocaleString());
// console.log(fechaActual.toDateString());
// console.log(fechaActual.toLocaleDateString());
// console.log(fechaActual.toTimeString());

// const casiNavidad = new Date(2024, 11, 24, 23, 59, 59);
// const fechaActual = new Date();

// const MILISEGUNDOS_DIA = 24 * 60 * 60 * 1000 //
// console.log(MILISEGUNDOS_DIA) // 86400000
// const DIFERENCIA = (casiNavidad - fechaActual) / MILISEGUNDOS_DIA;
// console.log("Faltan " + Math.round(DIFERENCIA) + " dias para Navidad.!!");

// Calcular el tiempo de ejecucion de un codigo
const INICIO = new Date();
for(let i = 1; i <= 1000; i++) {
    console.log("Programa ejecutándose...");
}
const FINAL = new Date();

console.log("El proceso tardo " + (FINAL - INICIO) + " de Milisegundos.!!");
