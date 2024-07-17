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

### Ejemplo Práctico

Supongamos que tienes una función que recibe un valor y quieres asegurarte de que es un número para realizar cálculos:

```javascript
function processValue(value) {
  if (typeof value === "string") {
    value = parseFloat(value);
  }
  
  if (typeof value === "number" && !isNaN(value)) {
    // Realizar cálculos con el valor numérico
    let result = value * 2;
    console.log("El resultado es:", result);
  } else {
    console.log("El valor no es un número válido.");
  }
}

processValue("123.45"); // El resultado es: 246.9
processValue("abc"); // El valor no es un número válido.
```


---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)
