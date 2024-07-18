// Ciclos e iteraciones
// Actualizacion:
// let i = 0;
// console.log(i)
// i = i + 1;
// console.log(i)
// i = i + 1;
// console.log(i)
// i = i + 1; // i++
// console.log(i)
// i++
// console.log("i Actualizado con i++ ", i)

// Ciclo for
// for(desde, hasta, actualizacion ) {
//     lo que quiero que se ejecute;
// }
// let i = 0;
// for (i; i <= 10; i++) {
//     console.log("Se esta ejecutando un for hasta el " + i)
// }


// let ingreseUnNumero = parseInt(prompt("Ingrese un numero"));
// console.log("Tabla de Multiplicar del " + ingreseUnNumero);

// for (let i = 1; i <= 10; i++) {
//     let r = ingreseUnNumero * i; // r = 3 * 1
//     console.log(ingreseUnNumero + " x " + i + " = " + r)
// }


// let nombre = prompt("Ingrese su Nombre")

// for(let i = 1; i <= 5; i++ ) {
//     console.log("Su nombre es: " + nombre);
// }

// for (let i = 1; i <= 100; i++) {
//     console.log("Los numeros son: " + i);
//     if (i == 19) {
//         console.log("Esto esta dentro del IF: " + i);
//         break; // Corta la ejecucion del for
//     }    
// }

// for (let i = 1; i <= 20; i++) {

//     if (i == 10) {
//         continue; // Saltea el 10
//     }
//     console.log("Los numeros son: " + i);
// }

/**
 *  i % 2 === 0 // Numeros Pares
 *  i % 2 !== 0 // Numeros Impares
 */


// for (let i = 1; i <= 20; i++) {

//     if (i % 2 !== 0) {
//         continue; // Saltea los numeros Impares
//     }
//     console.log("Los numeros Pares son: " + i);
// }

// Ciclo While
// let ingreseUnValor = prompt("Ingrese un numero");

// while(ingreseUnValor != 0) {
//     console.log("El usuario ingreso: " + ingreseUnValor);
//     ingreseUnValor = prompt("Ingrese otro valor"); // Poner el freno de mano
// }

// Ciclo do While
// let ingreseUnValor = prompt("Ingrese un numero");

// do {
//     console.log("El usuario ingreso: " + ingreseUnValor);
//     ingreseUnValor = prompt("Ingrese otro valor");
// } while (ingreseUnValor != 0)

//  Switch

let ingreseSuNombre = prompt("Ingrese su Nombre");

while (ingreseSuNombre != "Chau") {
    switch (ingreseSuNombre) {
        case "Alejandro":
            console.log("Su nombre es Alejandro");
            break;
        case "JavaScript":
            console.log(ingreseSuNombre + " No es un Nombre");
            break;
        default:
            console.log("Nos vemos en Disney");
            break;
    }
    ingreseSuNombre = prompt("Ingrese otro Nombre");
}