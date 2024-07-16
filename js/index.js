// if(condicion){
//     lo que queremos que se ejecute.!
// }

// condiciones pueden dar como resultado un true o un false

// if (true) // SI condicion == true, entonces se ejecuta {}
//     {
//         console.log("Condicion cumplida o verdadera")
//     }

// if (false) // condicion == false por eso no se ejecuta
//     {
//         console.log("Condicion No cumplida o falsa | No se imprime")
//     }

// // Las Booleanas tambien son variables primitivas
// const V = true;
// const F = false;

// if (V) { // El Valor de verdad de la variable es true
//     console.log("Condicion cumplida o verdadera usando V")
// }

// dentro de los () debemos poner una condicion
// Ejemplo:

// const EDAD = 18;

// const edadIngresada = prompt("Ingrese su Edad: ");

// if (edadIngresada >= EDAD) { // Estamos haciendo una comparacion
//     alert("Puede ingresar.!")
// } else { // Sino ejecuta esto:
//     alert("Es menor a " + EDAD + " no puede pasar.!");
// }

// Comparaciones
// Ejemplo con strings

// let color = "Azul";
// let ingreseUnColor = prompt("Ingrese un color:")

// if (ingreseUnColor == color) {
//     console.log("El color ingresado es " + color)
// } else {
//     console.warn("El color ingresado NO ES " + color + " Usted ingreso: " + ingreseUnColor)
// }

// const PI = 3.14;
// const ingreseUnValor = prompt("Ingrese un número:")

// if (ingreseUnValor <= 0) {
//     console.warn("No se puede ingresar un Valor Negativo o Igual a 0")
// } else if (ingreseUnValor < PI) {
//     console.log("El numero ingresado es menor a PI")
// } else if (ingreseUnValor == PI) {
//     console.log("El numero ingresado es igual a PI")
// } else if (ingreseUnValor > PI) {
//     console.log("El numero ingresado es mayor a PI")
// } else {
//     console.error("El dato ingresado no es un Número.!")
// }

// Tabla de Verdad (logica proposiocional)

// const V = true;
// const F = false;

// console.log("Tabla de Verdad del Operador && (Y)");
// console.log(V && V); // Si ambos son V => true
// console.log(V && F); // Si al menos uno de los valores es F => false
// console.log(F && V); // Si al menos uno de los valores es F => false
// console.log(F && F); // Si ambos de los valores son F => false


// console.log("Tabla de Verdad del Operador || (O)");
// console.log(V || V); // Si ambos son V => true
// console.log(V || F); // Si al menos uno de los valores es V => true
// console.log(F || V); // Si al menos uno de los valores es V => true
// console.log(F || F); // Si ambos de los valores son F => false

// console.log("Tabla de Verdad del Operador de Negación (!)");
// console.log(!V); // Si no es Verdadero => false
// console.log(!F); // Si no es False => true


// const VACIO = "";
// const ingreseUnNumeroPorPrompt = prompt("Ingrese un numero")

// if (ingreseUnNumeroPorPrompt == VACIO) {
//     console.warn("No ha ingresado nada")
// } else if (ingreseUnNumeroPorPrompt < 0 || ingreseUnNumeroPorPrompt == 0) {
//     console.warn("No se puede ingresar un Valor Negativo o Igual a 0")
// } else if (ingreseUnNumeroPorPrompt > 0 && ingreseUnNumeroPorPrompt < 1) {
//     console.log("El numero ingresado esta entre 0 y 1")
// } else if (ingreseUnNumeroPorPrompt == 1) {
//     console.log(" Usted ingreso el 1")
// } else if (ingreseUnNumeroPorPrompt > 1 && (ingreseUnNumeroPorPrompt < 50 || ingreseUnNumeroPorPrompt == 50 )) { 
// // (ingreseUnNumeroPorPrompt < 50 || ingreseUnNumeroPorPrompt == 50 ) es lo mismo que poner ingreseUnNumeroPorPrompt <= 50
//     console.log("El numero ingresado esta entre 1 y 50")
// } else if (ingreseUnNumeroPorPrompt > 50) {
//     console.log("El numero ingresado es mayor a 50")
// } else {
//     console.error("El dato ingresado no es un Número.!")
// }


// Actividad en Clase:
// if (prompt("Ingrese un Valor: ") > 1000) {
//     alert("Numero Mayor a 1000")
// }

// if(prompt("Ingrese un Texto") == "Hola") {
//     console.warn("Hola")
// }

// const valor = prompt("Ingrese un Valor");

// if ((valor > 10 || valor == 10 ) && ( valor < 50 || valor == 50)) {
//     alert("Aprobo.!!")
// }