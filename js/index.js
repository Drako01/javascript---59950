// Funciones de Orden Superior
// function cualquiera () {
//     console.log("Hola mundo")
// }

// cualquiera();

// const suma = (a, b) => {
//     return a + b;
// }

// const suma = (a, b) => a + b;

// console.log(suma(5, 6));



// function mayorQue(numero) {
//     return (otroNumero) => otroNumero > numero; // retorna otra funcion
// }

// let mayorQueDiez = mayorQue(10);

// console.log(mayorQueDiez(12)); // Hace esta comparacio 12 > 10 ?? true
// console.log(mayorQueDiez(2)); // Hace esta comparacio 2 > 10 ?? false


// Otro ejemplo
// function asignaOperacion (operacion) {
//     if (operacion == "suma") {
//         return (a, b) => a + b;
//     } else if (operacion == "resta") {
//         return (a, b) => a - b;
//     } else {
//         console.log("Debe ingresar suma o resta");
//     }
// }

// const sumar = asignaOperacion("suma");
// const restar = asignaOperacion("resta");

// console.log(sumar(4, 5));
// console.log(restar(14, 6));

// Recibir funciones por parametro

// const numeros = [1, 2, 3, 4, 5, 10];

// function porCadaUno(array, funcion) {
//     for (const elemento of array) {
//         funcion(elemento);
//     }
// }

// function potencia(n) {
//     return console.log(n * n);
// }

// function elDobleDe(n) {
//     return console.log(n * 2);
// }
// porCadaUno(numeros, console.log);
// porCadaUno(numeros, alert);
// porCadaUno(numeros, potencia);
// porCadaUno(numeros, elDobleDe);

// const numeros = [1, 2, 3, 4, 5, 10];

// function porCadaUno(array, funcion) {
//     for (const elemento of array) {
//         funcion(elemento);
//     }
// }

// const segundoArray = [];

// porCadaUno(numeros, (elemento) => {
//     segundoArray.push(elemento * 3);
// })

// console.log(segundoArray);

///////////////////////////////////////////////////////////////
// Metodos de busqueda y transformacion

// const numeros = [1, 2, 3, 4, 5, 10];

// numeros.forEach((elemento) => {
//     console.log(elemento * elemento);
// })

// const cursos = [
//     {nombre: "JavaScript", estado: "Finalizado"},
//     {nombre: "React", estado: "Por Empezar"},
//     {nombre: "Java", estado: "Por Empezar"}
// ]
// Metodo find
// const resultado = cursos.find((elemento) => elemento.nombre === "JavaScript");
// // console.log(resultado);
// const resultadoFalso = cursos.find((elemento) => elemento.nombre === "Java");
// // console.log(resultadoFalso);
// const resultadoEstado = cursos.find((elemento) => elemento.estado === "Finalizado");
// // console.log(resultadoEstado);
// const resultadoEstadoPorEmpezar = cursos.find((elemento) => elemento.estado === "Por Empezar");
// console.log(resultadoEstadoPorEmpezar);

// Metodo filter
// const resultado = cursos.filter((elemento) => elemento.nombre === "JavaScript");
// // console.log(resultado);
// const resultadoEstadoPorEmpezar = cursos.filter((elemento) => elemento.estado === "Por Empezar");
// // console.log(resultadoEstadoPorEmpezar);
// const resultadoFalso = cursos.filter((elemento) => elemento.nombre === "Python");
// console.log(resultadoFalso);

// Metodo some
// const resultado = cursos.some((elemento) => elemento.nombre === "JavaScript");
// console.log(resultado);
// const resultadoFalso = cursos.some((elemento) => elemento.nombre === "Python");
// console.log(resultadoFalso);

// Metodo map
// const cursos = [
//     {nombre: "JavaScript", estado: "Finalizado"},
//     {nombre: "React", estado: "Por Empezar"},
//     {nombre: "Java", estado: "Por Empezar"}
// ]

// const nombres = cursos.map((elemento) => elemento.nombre);
// console.log(nombres);

// const numeros = [1, 2, 3, 4, 5, 10];

// const dobles = numeros.map(function(numero) {
//     return numero * 2;
// })

// console.log(numeros);
// console.log(dobles);

// Metodo reduce
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const resultado = numeros.reduce((acumulador, elemento) => acumulador + elemento , 0);
// console.log(resultado);

// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));