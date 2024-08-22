// Spread operator ...

// const numeros = [1, 2, 56, -10, 25, 100, 0];

// console.log(Math.max(numeros));
// console.log(Math.max(1, 2, 56, -10, 25, 100, 0)); // 100
// console.log(Math.min(1, 2, 56, -10, 25, 100, 0)); // -10

// console.log(numeros);
// console.log(1, 2, 56, -10, 25, 100, 0);
// console.log(...numeros);
// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// const productos = ["Azucar", "Yerba", "Café", "Pepsi"];
// const productos2 = ["Coca Cola", "Fernet", "Hielo"];
// console.log(productos);

// console.log(...productos);
// console.log(...productos2);

// const nuevoArrayProductos = [...productos, ...productos2];
// console.log(nuevoArrayProductos);
// console.log(...nuevoArrayProductos);

// const otroNuevoArrayDeProductos = ["Chocolate", "Helado", ...nuevoArrayProductos];
// console.log(otroNuevoArrayDeProductos);

// const otroArray = ["Milanesa", "Chivito", "Carne"];

// const objetoProducto = {
//     ...otroNuevoArrayDeProductos,
//     0: "Chocolate Blanco",
//     10: "Almendra",
//     ...otroArray,
//     9: "Algo"

// }

// console.log(objetoProducto);

// const objeto = {
//     key: "value"
// }
// console.log(objeto);


/// Spread de Objetos

// const alumno = {
//     nombre: "Sharon",
//     edad: 27,
//     curso: "JavaScript"
// }

// console.log(alumno);
// const nuevoAlumno = {...alumno}
// console.log(nuevoAlumno);

// const comida = {
//     producto: "Chivito",
//     precio: 1500
// }

// console.log(comida);

// const nuevoObjeto = {
//     ...alumno,
//     ...comida,
//     stock: 100
// }

// console.log(nuevoObjeto);

// Rest parametros
// const numeros = [1, 2, 56, -10, 25, 100, 0];

// function sumarElementosDelArray(...loQueSea) {
//     return console.log(loQueSea.reduce((acumulador, numero) => acumulador + numero, 0));
// }
// sumarElementosDelArray(...numeros);
// sumarElementosDelArray(1, 5, 6, 8);
// sumarElementosDelArray(10, 20, 30);

// function suma(...loQueSeaParaSumar) {
//     return console.log(loQueSeaParaSumar.reduce((acumulador, numero) => acumulador + numero, 0));
// }
// suma(1,2,3);
// suma(1,2);