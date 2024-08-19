# Operadores lógicos

### Operador Lógico `&&` (AND)
El operador lógico `&&`, también conocido como **AND**, se utiliza para evaluar múltiples condiciones en una expresión. Devuelve `true` solo si todas las condiciones son verdaderas. Si alguna condición es falsa, el resultado será `false`.

**Ejemplo**:
```javascript
let a = 5;
let b = 10;

if (a > 0 && b > 0) {
    console.log("Ambos números son positivos");
}
```
**Aplicaciones**:
- Se usa para asegurarse de que se cumplan varias condiciones antes de ejecutar un bloque de código.
- Ideal para validar formularios donde varios campos deben cumplir con ciertos requisitos.

### Operador Lógico `||` (OR)
El operador lógico `||`, conocido como **OR**, se utiliza para evaluar múltiples condiciones, devolviendo `true` si al menos una de ellas es verdadera. Solo devuelve `false` si todas las condiciones son falsas.

**Ejemplo**:
```javascript
let a = -5;
let b = 10;

if (a > 0 || b > 0) {
    console.log("Al menos uno de los números es positivo");
}
```
**Aplicaciones**:
- Útil cuando necesitas que al menos una condición sea verdadera para continuar con una acción.
- Se puede usar para establecer valores predeterminados cuando una opción no está disponible.

### Operador Lógico `??` (Nullish Coalescing)
El operador `??`, o **Nullish Coalescing**, es un operador que devuelve el valor de la derecha si el valor de la izquierda es `null` o `undefined`. Si el valor de la izquierda no es `null` ni `undefined`, devuelve ese valor.

**Ejemplo**:
```javascript
let userName = null;
let defaultName = "Invitado";

let displayName = userName ?? defaultName;
console.log(displayName); // "Invitado"
```

**Aplicaciones**:
- Es muy útil para proporcionar valores predeterminados cuando se espera que una variable pueda ser `null` o `undefined`.
- Facilita la gestión de valores opcionales sin tener que realizar múltiples verificaciones.

### Desestructuración de Parámetros
La desestructuración de parámetros en JavaScript permite extraer valores de objetos o arrays directamente dentro de la firma de una función. Es una forma conveniente de asignar valores a variables sin tener que acceder a ellos manualmente.

**Ejemplo con Objetos**:
```javascript
function mostrarInfo({ nombre, edad }) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

let persona = { nombre: "Alejandro", edad: 30 };
mostrarInfo(persona); // "Nombre: Alejandro, Edad: 30"
```

**Aplicaciones**:
- Simplifica el acceso a las propiedades de un objeto dentro de una función.
- Útil para funciones que reciben un objeto como argumento y necesitan trabajar con varias de sus propiedades.

**Ejemplo con Valores Predeterminados**:
```javascript
function mostrarInfo({ nombre = "Invitado", edad = 18 }) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

mostrarInfo({}); // "Nombre: Invitado, Edad: 18"
```
# Desestructuración

### Desestructuración de Arrays
La desestructuración de arrays permite asignar elementos de un array a variables individuales de manera más sencilla.

**Ejemplo**:
```javascript
let colores = ["rojo", "verde", "azul"];
let [primero, segundo, tercero] = colores;

console.log(primero);  // "rojo"
console.log(segundo);  // "verde"
console.log(tercero);  // "azul"
```

**Aplicaciones**:
- Ideal para extraer elementos de un array y asignarlos a variables rápidamente.
- Se puede usar para intercambiar valores entre variables de manera eficiente.

**Ejemplo con Valores Predeterminados**:
```javascript
let [a, b = 10] = [5];

console.log(a); // 5
console.log(b); // 10
```

### Desestructuración con el Operador Rest (`...`)
Puedes usar el operador `...` para capturar el resto de los elementos en un array o las propiedades restantes en un objeto.

**Ejemplo con Arrays**:
```javascript
let [primero, ...resto] = [1, 2, 3, 4];
console.log(primero); // 1
console.log(resto);   // [2, 3, 4]
```

**Ejemplo con Objetos**:
```javascript
let { nombre, ...otros } = { nombre: "Alejandro", edad: 30, pais: "Argentina" };
console.log(nombre); // "Alejandro"
console.log(otros);  // { edad: 30, pais: "Argentina" }
```

**Aplicaciones**:
- Muy útil para trabajar con partes de un array o las propiedades de un objeto mientras se ignoran otras.
- Facilita la manipulación de estructuras de datos complejas al mantener el código limpio y legible.

