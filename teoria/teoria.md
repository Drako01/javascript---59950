#  ¿Cuál es la diferencia real entre crear objetos usando function o usando clases? 


En JavaScript, tanto las funciones constructoras (`function`) como las clases (`class`) se utilizan para crear objetos y manejar la orientación a objetos. Sin embargo, hay diferencias importantes entre ambos enfoques. Aquí se presentan las diferencias clave y las razones para elegir uno sobre el otro.

### Funciones Constructoras

**Sintaxis y Uso:**

Las funciones constructoras son funciones regulares que se utilizan para crear objetos. Se les suele poner un nombre con mayúscula inicial para diferenciarlas de las funciones normales.

```javascript
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
};

const persona1 = new Persona('Alejandro', 30);
persona1.saludar(); // "Hola, me llamo Alejandro y tengo 30 años."
```

**Características:**

1. **Prototipo:** Las funciones constructoras utilizan prototipos para compartir métodos entre instancias.
2. **Herencia:** La herencia se logra mediante la manipulación del prototipo, lo cual puede ser más complejo que con clases.

### Clases

**Sintaxis y Uso:**

Las clases fueron introducidas en ECMAScript 6 (ES6) y proporcionan una sintaxis más clara y moderna para la creación de objetos y la herencia.

```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona1 = new Persona('Alejandro', 30);
persona1.saludar(); // "Hola, me llamo Alejandro y tengo 30 años."
```

**Características:**

1. **Sintaxis Clara:** La sintaxis de las clases es más clara y concisa que la de las funciones constructoras, lo que mejora la legibilidad del código.
2. **Métodos estáticos:** Las clases permiten definir métodos estáticos que no están vinculados a instancias particulares.
3. **Herencia:** La herencia en clases es más simple y directa usando las palabras clave `extends` y `super`.

### Diferencias y Comparaciones

1. **Claridad y Sintaxis:**
   - **Clases:** Proporcionan una sintaxis más clara y estructurada para definir objetos y herencia.
   - **Funciones Constructoras:** Pueden ser más verbosas y menos intuitivas, especialmente para desarrolladores que provienen de otros lenguajes orientados a objetos.

2. **Herencia:**
   - **Clases:** Facilitan la herencia con una sintaxis sencilla (`extends` y `super`).
   - **Funciones Constructoras:** La herencia requiere manipulación explícita del prototipo, lo que puede ser más complicado y propenso a errores.

3. **Métodos y Propiedades:**
   - **Clases:** Los métodos definidos dentro de la clase son no-enumerables, lo que significa que no aparecerán en bucles `for...in`.
   - **Funciones Constructoras:** Los métodos definidos en el prototipo son enumerables, lo que significa que aparecerán en bucles `for...in`.

4. **Compatibilidad:**
   - **Funciones Constructoras:** Son compatibles con todas las versiones de JavaScript.
   - **Clases:** Requieren ES6, por lo que en entornos muy antiguos podrían no estar disponibles sin un transpilador como Babel.

### ¿Cuál Usar?

- **Usar Clases:**
  - Cuando se busca una sintaxis más moderna, clara y similar a otros lenguajes orientados a objetos.
  - Para aprovechar la herencia simplificada y los métodos estáticos.

- **Usar Funciones Constructoras:**
  - En entornos donde ES6 no está disponible o no se puede usar.
  - Cuando se necesita compatibilidad con código y bibliotecas antiguas.

En resumen, las clases en JavaScript ofrecen una forma más moderna y clara de trabajar con la orientación a objetos, mientras que las funciones constructoras proporcionan una solución más antigua y compatible con versiones anteriores del lenguaje.


----


----

<br><br>


# Funciones de Orden Superior en JavaScript

Una **función de orden superior** es una función que puede recibir otras funciones como argumentos o que puede retornar una función. Estas funciones son fundamentales en JavaScript y en la programación funcional, ya que permiten un estilo de programación más declarativo y conciso.

#### Características de las Funciones de Orden Superior

1. **Reciben funciones como argumentos**: Pueden tomar una o más funciones como parámetros.
2. **Retornan funciones**: Pueden devolver una nueva función como resultado.

### Ejemplos de Funciones de Orden Superior

1. **`map`**:
   - **Descripción**: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
   - **Ejemplo**:

     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     const doubled = numbers.map(function(number) {
       return number * 2;
     });

     console.log(doubled); // [2, 4, 6, 8, 10]
     ```

2. **`filter`**:
   - **Descripción**: Crea un nuevo array con todos los elementos que pasen la prueba implementada por la función dada.
   - **Ejemplo**:

     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     const even = numbers.filter(function(number) {
       return number % 2 === 0;
     });

     console.log(even); // [2, 4]
     ```

3. **`reduce`**:
   - **Descripción**: Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.
   - **Ejemplo**:

     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     const sum = numbers.reduce(function(total, number) {
       return total + number;
     }, 0);

     console.log(sum); // 15
     ```

4. **`forEach`**:
   - **Descripción**: Ejecuta una función dada una vez por cada elemento del array.
   - **Ejemplo**:

     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     numbers.forEach(function(number) {
       console.log(number);
     });

     // Output:
     // 1
     // 2
     // 3
     // 4
     // 5
     ```

5. **`sort`**:
   - **Descripción**: Ordena los elementos de un array in situ y devuelve el array.
   - **Ejemplo**:

     ```javascript
     const numbers = [5, 3, 8, 1, 2];
     numbers.sort(function(a, b) {
       return a - b; // Orden ascendente
     });

     console.log(numbers); // [1, 2, 3, 5, 8]
     ```

El método `sort` se utiliza para ordenar los elementos de un array. De manera predeterminada, el método `sort` convierte los elementos a cadenas y los ordena según su valor Unicode, lo cual puede no ser útil para ordenar números. Por eso, generalmente, se le pasa una función de comparación que define el criterio de ordenación.

### Función de comparación

La función de comparación recibe dos argumentos (digamos `a` y `b`) y debe devolver un valor numérico que determina el orden relativo de `a` y `b`:
- Si la función devuelve un valor **negativo**, `a` se ordena antes que `b`.
- Si la función devuelve **cero**, `a` y `b` se consideran iguales en términos de orden.
- Si la función devuelve un valor **positivo**, `a` se ordena después que `b`.

### Ejemplos

#### Orden ascendente `(a, b) => a - b`
```javascript
numeros.sort((a, b) => a - b);
```
Aquí, `a` y `b` son dos elementos del array. La expresión `a - b` devolverá:
- Un número negativo si `a` es menor que `b` (por lo tanto, `a` debe venir antes que `b`).
- Cero si `a` es igual a `b`.
- Un número positivo si `a` es mayor que `b` (por lo tanto, `a` debe venir después de `b`).

Por ejemplo:
- Para `a = 3` y `b = 5`, `a - b` es `-2`, por lo que `3` se ordena antes que `5`.
- Para `a = 7` y `b = 2`, `a - b` es `5`, por lo que `7` se ordena después que `2`.

Esto hace que el array se ordene de menor a mayor.

#### Orden descendente `(a, b) => b - a`
```javascript
numeros.sort((a, b) => b - a);
```
Aquí, la expresión `b - a` devolverá:
- Un número negativo si `b` es menor que `a` (por lo tanto, `b` debe venir antes que `a`).
- Cero si `b` es igual a `a`.
- Un número positivo si `b` es mayor que `a` (por lo tanto, `b` debe venir después de `a`).

Por ejemplo:
- Para `a = 3` y `b = 5`, `b - a` es `2`, por lo que `5` se ordena antes que `3`.
- Para `a = 7` y `b = 2`, `b - a` es `-5`, por lo que `2` se ordena después que `7`.

Esto hace que el array se ordene de mayor a menor.

### Ejemplo en código

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros.sort((a, b) => a - b)); // Orden ascendente: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros.sort((a, b) => b - a)); // Orden descendente: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

En resumen, `(a, b) => a - b` ordena los números de menor a mayor, y `(a, b) => b - a` ordena los números de mayor a menor.

### Ejemplo Adicional: Función que Retorna Otra Función

Una función de orden superior también puede retornar otra función.

```javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### Conclusión

Las funciones de orden superior son una herramienta poderosa en JavaScript. Permiten escribir código más limpio, reutilizable y declarativo. Al entender y utilizar estas funciones, tus alumnos podrán manejar mejor la manipulación de arrays y otros datos de manera eficiente.




---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)