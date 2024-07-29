# Teoría de la Clase 06

### Arrays en JavaScript

Los arrays en JavaScript son estructuras de datos que permiten almacenar múltiples valores en una sola variable. Los elementos en un array pueden ser accedidos por su índice, que comienza en 0. A continuación, se presentan los métodos y propiedades más comunes para trabajar con arrays, junto con ejemplos de cómo usarlos.

### Propiedades y Métodos de Arrays

#### 1. `length`
La propiedad `length` devuelve el número de elementos en un array.

**Ejemplo:**
```javascript
let arr = [1, 2, 3, 4];
console.log(arr.length); // 4
```

#### 2. `push()`
El método `push()` añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

**Ejemplo:**
```javascript
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```

#### 3. `unshift()`
El método `unshift()` añade uno o más elementos al principio de un array y devuelve la nueva longitud del array.

**Ejemplo:**
```javascript
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]
```

#### 4. `shift()`
El método `shift()` elimina el primer elemento de un array y devuelve ese elemento. Este método cambia la longitud del array.

**Ejemplo:**
```javascript
let arr = [1, 2, 3];
let firstElement = arr.shift();
console.log(arr); // [2, 3]
console.log(firstElement); // 1
```

#### 5. `pop()`
El método `pop()` elimina el último elemento de un array y devuelve ese elemento. Este método cambia la longitud del array.

**Ejemplo:**
```javascript
let arr = [1, 2, 3];
let lastElement = arr.pop();
console.log(arr); // [1, 2]
console.log(lastElement); // 3
```

#### 6. `reverse()`
El método `reverse()` invierte el orden de los elementos en un array. El primer elemento se convierte en el último y el último en el primero.

**Ejemplo:**
```javascript
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

#### 7. `join()`
El método `join()` une todos los elementos de un array en una cadena y los separa con un separador especificado.

**Ejemplo:**
```javascript
let arr = [1, 2, 3];
let str = arr.join('-');
console.log(str); // "1-2-3"
```

#### 8. `concat()`
El método `concat()` se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

**Ejemplo:**
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4]
```

#### 9. `slice()`
El método `slice()` devuelve una copia superficial de una parte de un array en un nuevo array, sin modificar el array original.

**Ejemplo:**
```javascript
let arr = [1, 2, 3, 4];
let slicedArr = arr.slice(1, 3);
console.log(slicedArr); // [2, 3]
```

#### 10. `splice()`
El método `splice()` cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

**Ejemplo:**
```javascript
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b');
console.log(arr); // [1, 'a', 'b', 4]
```

#### 11. `indexOf()`
El método `indexOf()` devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si el elemento no está presente.

**Ejemplo:**
```javascript
let arr = [1, 2, 3];
let index = arr.indexOf(2);
console.log(index); // 1
```

#### 12. `includes()`
El método `includes()` determina si un array incluye un determinado elemento, devolviendo true o false según corresponda.

**Ejemplo:**
```javascript
let arr = [1, 2, 3];
let hasTwo = arr.includes(2);
console.log(hasTwo); // true
```

### Sentencia `for...of`

La sentencia `for...of` permite recorrer objetos iterables (incluidos arrays) de manera fácil y directa.

**Ejemplo:**
```javascript
let arr = [1, 2, 3];
for (let value of arr) {
    console.log(value);
}
// 1
// 2
// 3
```


### Material de Referencia


[documentación de MDN sobre arrays](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array) 

---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)