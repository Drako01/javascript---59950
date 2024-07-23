// Como se declara una funcion y cual es su estructura
// function nombreDeLaFuncion() {
//     //¿Que va a hacer? Lo que Yo le diga que haga..!!!
// }

// console.log("Mostrando mensaje.!!");
// console.log("Mostrando mensaje.!!");
// console.log("Mostrando mensaje.!!");
// console.log("Mostrando mensaje.!!");
// console.log("Mostrando mensaje.!!");

// Aca la declaramos
// function enviarMensaje(){
//     console.log("Mostrando mensaje.!!");
// }

// enviarMensaje();
// enviarMensaje();
// enviarMensaje();
// enviarMensaje();
// enviarMensaje();

// function ingresarNombre() {
//     let ingreseSuNombre = prompt("Ingrese su Nombre");
//     console.log("El nombre ingresado es: " + ingreseSuNombre)
// }

// for (let i = 0; i < 5; i++) { // La variable i tambien es una variable Local
//     ingresarNombre()
// }

// Funciones con parametros
// function enviarMensajeConParametros(mensaje1, mensaje2){
//     console.log("Este es el mensaje Nro 1: " + mensaje1);
//     console.log("Este es el mensaje Nro 2: " + mensaje2);
// }

// enviarMensajeConParametros("Enviar mensaje", "Mensaje 2");
// enviarMensajeConParametros("Mensaje distinto", "Mensaje 2 distinto");
// enviarMensajeConParametros("Mensaje distinto, otra vez", "Mensaje 2 distinto, otra vez");

// let resultado = 0; // Es una Variable Global
// // console.log(resultado)
// function sumar(numero1, numero2) {
//     resultado = numero1 + numero2;    
// }

// function mostrarResultado(mensaje){
//     console.log(mensaje);
// }

// sumar(23, 65);
// mostrarResultado("El resultado de la Suma es: " + resultado);

// function sumarConReturn (numero1, numero2){
//     return numero1 + numero2;
// }

// console.log("El resultado de la suma es: " + sumarConReturn(5,4));

// function calculadora(numero1, operacion, numero2) {
//     switch (operacion) {
//         case "+":
//             return numero1 + numero2;
//             break;
//         case "-":
//             return numero1 - numero2;
//             break;
//         case "*":
//             return numero1 * numero2;
//             break;
//         case "/":
//             if (numero2 != 0) {
//                 return numero1 / numero2;
//             } else {
//                 return console.error("No se puede dividir por 0")
//             }
//             break
//         default:
//             return 0;
//             break;
//     }
// }


// function usarCalculadora () {
//     let numero1 = parseFloat(prompt("Ingrese un numero"));
//     let operacion = prompt("Ingrese la Operacion");
//     let numero2 = parseFloat(prompt("Ingrese otro numero"));
//     return console.log(
//         "El resultado de la Operacion es: " +
//         calculadora(numero1, operacion, numero2));
// }

// usarCalculadora();

// Scope - Alcance de una Variable
// function llamarVariable () {
//     let numero = 10; // Variable Local
//     console.log(numero);
// }

// llamarVariable() // Aca muere la Variable numero
// // Si la llamo por fuera, me da que no esta definida
// console.log(numero);

// Funciones Anonimas

// const suma = function (a, b) { return a + b }
// const suma =  (a, b) => { return a + b }
// const suma =  (a, b) =>  a + b;
// const resta =  (a, b ) => a - b; // Funciones Flecha

// console.log(suma(5,4));
// console.log(resta(5,4));

// const iva = x => x * 0.21;
// let precio = 100;
// // console.log(iva(precio));


// function calcularPrecioConIva(precio) {
//     const nuevoPrecio = precio + iva(precio);
//     console.log(nuevoPrecio);    
// }

// calcularPrecioConIva(1000)