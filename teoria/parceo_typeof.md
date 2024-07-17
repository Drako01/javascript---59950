# Algo de Teoría para complementar lo visto en Clase

En JavaScript, el **parsing** (parseo) se refiere a convertir datos de un tipo a otro, 
mientras que `typeof` se utiliza para determinar el tipo de un dato.

### Parsing en JavaScript

#### Parseo de cadenas a números

- **`parseInt()`**: Convierte una cadena a un número entero.
  
  ```javascript
  let str = "123";
  let num = parseInt(str); // 123
  ```

- **`parseFloat()`**: Convierte una cadena a un número con punto decimal.
  
  ```javascript
  let str = "123.45";
  let num = parseFloat(str); // 123.45
  ```

- **`Number()`**: Convierte una cadena a un número. Funciona con enteros y decimales.
  
  ```javascript
  let strInt = "123";
  let strFloat = "123.45";
  let numInt = Number(strInt); // 123
  let numFloat = Number(strFloat); // 123.45
  ```

#### Parseo de otros tipos de datos

- **`String()`**: Convierte un número o un booleano a una cadena.
  
  ```javascript
  let num = 123;
  let bool = true;
  let strNum = String(num); // "123"
  let strBool = String(bool); // "true"
  ```

- **`Boolean()`**: Convierte un valor a booleano.
  
  ```javascript
  let str = "hello";
  let num = 0;
  let boolStr = Boolean(str); // true
  let boolNum = Boolean(num); // false
  ```

### `typeof` en JavaScript

`typeof` es un operador que devuelve una cadena indicando el tipo del operando.

#### Ejemplos de uso de `typeof`

```javascript
console.log(typeof 123); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (esto es un error histórico en JavaScript)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (los arrays son un tipo especial de objeto)
console.log(typeof function(){}); // "function"
console.log(typeof Symbol()); // "symbol"
```

#### Uso en combinaciones

Puedes usar `typeof` junto con el parseo para verificar y convertir tipos de datos según sea necesario.

```javascript
let value = "456";
if (typeof value === "string") {
  let num = parseInt(value);
  console.log(typeof num); // "number"
}
```


El operador `===` en JavaScript se conoce como el operador de igualdad estricta. Se utiliza para comparar dos valores y verificar si son iguales tanto en valor como en tipo. A diferencia del operador `==`, que solo compara el valor, el operador `===` también compara el tipo de los valores.

### Ejemplos de Uso del Operador `===`

#### Comparación de Números
```javascript
let num1 = 5;
let num2 = 5;
console.log(num1 === num2); // true
```

#### Comparación de Cadenas
```javascript
let str1 = "hello";
let str2 = "hello";
console.log(str1 === str2); // true
```

#### Comparación de Tipos Diferentes
```javascript
let num = 5;
let str = "5";
console.log(num === str); // false
```

#### Comparación de Booleanos
```javascript
let bool1 = true;
let bool2 = true;
console.log(bool1 === bool2); // true
```

### Diferencias entre `===` y `==`

El operador `==` hace una comparación menos estricta porque realiza conversiones de tipo implícitas si los valores no son del mismo tipo. Esto puede llevar a resultados inesperados.

#### Ejemplos de `==`
```javascript
let num = 5;
let str = "5";
console.log(num == str); // true (porque se convierte '5' a 5 antes de la comparación)
```

#### Ejemplos de `===`
```javascript
let num = 5;
let str = "5";
console.log(num === str); // false (porque no son del mismo tipo)
```

### ¿Cuándo Utilizar `===`?

#### Evitar Errores de Comparación

Usar `===` ayuda a evitar errores que pueden surgir de las conversiones de tipo implícitas. Esto es especialmente útil cuando trabajas con datos provenientes de diferentes fuentes, como entradas del usuario o datos de una API.

#### Comparación de Tipos

Si necesitas asegurarte de que dos variables no solo tienen el mismo valor, sino también el mismo tipo, `===` es la mejor opción.

#### Código Más Seguro y Legible

El uso de `===` hace que tu código sea más explícito y legible, ya que no se realizan conversiones de tipo detrás de escena. Esto facilita la comprensión del comportamiento del código.

### Ejemplos Prácticos

#### Validación de Entradas de Usuario
Supongamos que estás desarrollando un formulario que solo acepta números como entrada:

```javascript
let userInput = prompt("Introduce un número:");
if (typeof userInput === "string") {
  userInput = parseInt(userInput, 10);
}
if (userInput === 10) {
  console.log("Has introducido el número 10.");
} else {
  console.log("El número introducido no es 10.");
}
```



---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)
