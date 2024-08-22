// Sugar Syntax
// Acumulador
// let acumulador = 0;
// console.log(acumulador);

// acumulador = acumulador + 1;
// console.log(acumulador);
// acumulador = acumulador + 1;
// console.log(acumulador);
// acumulador = acumulador + 1;
// console.log(acumulador);
// acumulador = acumulador + 1;
// console.log(acumulador);
// acumulador = acumulador + 1;
// console.log(acumulador);
// acumulador += 1;
// console.log(acumulador);
// acumulador++;
// console.log(acumulador);
// acumulador++;
// console.log(acumulador);
// acumulador++;
// console.log(acumulador);
// acumulador++;
// console.log(acumulador);

// Operador ternario
// let temperatura = parseInt(prompt("Ingrese una Temperatura: "));

// if (temperatura >= 24) {
//     console.log("Esta agradable.!")
// } else {
//     console.warn("Esta de templado a frio.!")
// }

// temperatura >= 24 ? console.log("Esta agradable.!") : console.warn("Esta de templado a frio.!")

// condicion ? true : false
// condicion ? caso1 : caso2

// let permiso;

// const usuario = {
//     nombre: "Luciano",
//     edad: 24
// };

// if (usuario.edad >= 18) {
//     permiso = true;
// } else {
//     permiso = false;
// }

// if(permiso){
//     console.log(`El usuario ${usuario.nombre} puede tomarse una Cervecita.!`)
// } else {
//     console.warn(`El usuario ${usuario.nombre} es Menor de Edad.!`)
// }


// const permiso = (usuario.edad >= 18) ? true : false;
// permiso ? console.log(`El usuario ${usuario.nombre} puede tomarse una Cervecita.!`) : console.warn(`El usuario ${usuario.nombre} es Menor de Edad.!`);

// const permiso = (usuario.edad >= 18) ? console.log(`El usuario ${usuario.nombre} puede tomarse una Cervecita.!`) : console.warn(`El usuario ${usuario.nombre} es Menor de Edad.!`);

// Operadores Logicos
// Tablas de Verdad
// const V = true;
// const F = false;
// Operadores Logicos
// Operador && (and)
// console.log("Tabla de Verdad de Operador && (and)")
// console.log(V && V); // true
// console.log(V && F); // false
// console.log(F && V); // false
// console.log(F && F); // false

// // Operador || (or)
// console.log("Tabla de Verdad de Operador || (or)")
// console.log(V || V); // true
// console.log(V || F); // true
// console.log(F || V); // true
// console.log(F || F); // false

// const carritoArray = [];

// if (carritoArray.length === 0) {
//     console.log("El carrito esta vacio")
// }

// carritoArray.length === 0 && console.log("El carrito esta vacio");


// // Operador || (or)
// console.log( 0 || "Falsy")  // Falsy
// console.log( 40 || "Falsy")  // 40
// console.log( null || "Falsy")  // Falsy
// console.log( undefined || "Falsy")  // Falsy
// console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
// console.log( "" || "Falsy")  // Falsy
// console.log( NaN || "Falsy")  // Falsy
// console.log( true || "Falsy")  // true
// console.log( false || "Falsy")  // Falsy

// const usuario = {
//     nombre: "Luciano",
//     edad: 24
// };

// const usuarioNull = "";

// console.log(usuario || "El usuario No existe.!");
// console.log(usuarioNull || "El usuario No existe.!");


// Operador Nullish Coalescing

// console.log( 0 ?? "Nullish")  // 0
// console.log( 40 ?? "Nullish")  // 40
// console.log( null ?? "Nullish")  // Nullish
// console.log( undefined ?? "Nullish")  // Nullish
// console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
// console.log( "" ?? "Nullish")  // ""
// console.log( NaN ?? "Nullish")  // NaN
// console.log( true ?? "Nullish")  // true
// console.log( false ?? "Nullish")  // false

// const usuario = {
//     nombre: "Luciano",
//     edad: 24
// };

// let usuarioNull;

// console.log(usuario ?? "El usuario No existe.!");
// console.log(usuarioNull ?? "El usuario No existe.!");

// Acceso condicional a un Objeto
// const usuario = {
//     nombre: "Luciano",
//     edad: 24,
//     cursos: {
//         desarrolloWeb: "Aprobado",
//         javascript: "En curso"
//     }
// };

// let usuarioNull;

// console.log(usuario?.nombre  || "El usuario No existe.!");
// console.log(usuario?.cursos?.desarrolloWeb  || "El Curso No existe.!");
// console.log(usuario?.cursos?.javascript  || "El Curso No existe.!");
// console.log(usuario?.cursos?.react  || "El Curso No existe.!");

// console.log(usuarioNull?.nombre  || "El usuario No existe.!");


// Desestructuracion en parámetros

// const usuario1 = {
//     nombre: "Luciano",
//     edad: 24,
//     cursos: {
//         desarrolloWeb: "Aprobado",
//         javascript: "En curso"
//     }
// };

// const usuario2 = {
//     nombre: "Sharon",
//     edad: 27,
//     cursos: {
//         desarrolloWeb: "Aprobado",
//         javascript: "En curso"
//     }
// };

// let nombre = usuario1.nombre;
// let edad = usuario1.edad;
// console.log(nombre, edad);

// let { nombre, edad, cursos: { desarrolloWeb, javascript } } = usuario1;
// console.log(nombre, edad, desarrolloWeb, javascript);


// let nombre2 = usuario2.nombre;
// let edad2 = usuario2.edad;
// let { nombre, edad } = usuario2;
// console.log(nombre, edad);
// console.log(nombre2, edad2);

// Alias
// const {
//     nombre: nombreAlias1,
//     edad: edadAlias1
// } = usuario1;
// const {
//     nombre: nombreAlias2,
//     edad: edadAlias2
// } = usuario2;

// console.log(nombreAlias1, edadAlias1);
// console.log(nombreAlias2, edadAlias2);

// const desestructurarObjetos = (objeto) => {
//     const { nombre, edad } = objeto;
//     console.log(nombre, edad);
// }

// desestructurarObjetos(usuario1);
// desestructurarObjetos(usuario2);

// Desestructuracion de Arrays

const productos = ["Azucar", "Yerba", "Café", "Pepsi"];

// const [a, b] = productos;
// console.log(a);
// console.log(b);
const [,, b, c] = productos;
console.log(b);
console.log(c);


// Operador Ternario > Cuaternario
let numero = 1;
// if (numero > 5) {
//     console.log("Es mayor a 5");
// } else if (numero == 5 ){
//     console.log("Es igual a 5");
// } else {
//     console.log("Es menor a 5");
// }

numero > 5 ? console.log("Es mayor a 5") : numero == 5 ? console.log("Es igual a 5") : console.log("Es menor a 5");
