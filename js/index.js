/**
    16 - Crea una variable llamada nombreUsuario y asígnale un nombre. Luego, 
    verifica si el nombre tiene más de 6 
    caracteres e imprime un mensaje correspondiente.

    18 - Pide al usuario que ingrese su nombre utilizando prompt, luego verifica 
    si comienza con la letra "A" o "a" e 
    imprime un mensaje correspondiente.        
*/

// Ejercicio 16

// let nombreUsuario = "Ale";
// let caracteres = nombreUsuario.length; // Cuenta la cantidad de caracteres de el String

// if( caracteres > 6 ) {
//     console.log("El nombre: " + nombreUsuario + " tiene mas de 6 caracteres.!")
// } else {
//     console.log("El nombre: " + nombreUsuario + " tiene menos de 6 caracteres.!")
// }

// Ejercicio 18
// let nombreIngresado = prompt("Ingrese su nombre"); // Del tipo String

// if(nombreIngresado.charAt(0).toUpperCase() === 'A') {
//     console.log("Tu nombre empieza con A")
// } else {
//     console.log("Tu nombre No empieza con A")
// }

// Solicitar al usuario ingresar un numero y ver si era o no primo
let numeroIngresado = parseInt(prompt("Ingrese un número"));

let esPrimo = true;

if (numeroIngresado > 1) {
    for (let i = 2; i < numeroIngresado; i++) {
        if (numeroIngresado % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log("El número: " + numeroIngresado + " es Primo");
    } else {
        console.log("El número: " + numeroIngresado + " No es Primo");
    }

} else {
    console.log("El número: " + numeroIngresado + " No es Primo");
}


