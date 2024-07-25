# Teoría de la Clase 05

## Funciones Recurrentes

### ¿Qué es una función recurrente?

Una función recurrente es una función que se llama a sí misma. Las funciones recurrentes se usan comúnmente para resolver problemas que pueden ser desglosados en subproblemas más pequeños del mismo tipo.

### Ejemplo Básico

Un ejemplo clásico de una función recurrente es la función para calcular el factorial de un número:

```javascript
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // 120
```

En este ejemplo, la función `factorial` se llama a sí misma hasta que `n` es 0.

### Componentes de una función recursiva

Una función recursiva generalmente tiene dos componentes principales:
1. **Caso base**: Es la condición que detiene la recursión. Sin un caso base, la función seguiría llamándose indefinidamente, lo que podría causar un desbordamiento de pila.
2. **Caso recursivo**: Es la parte de la función que se llama a sí misma con un subconjunto del problema original.

### Ejemplo de Suma de Números

Este ejemplo muestra una función recursiva que suma los números de 1 a n.

```javascript
function suma(n) {
    if (n <= 1) {
        return n;
    } else {
        return n + suma(n - 1);
    }
}

console.log(suma(5)); // 15 (5 + 4 + 3 + 2 + 1)
```

### Ejemplo de Secuencia de Fibonacci

La secuencia de Fibonacci es una serie de números en la que cada número es la suma de los dos anteriores. Aquí hay una función recursiva para calcular el enésimo número de Fibonacci:

```javascript
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6)); // 8 (0, 1, 1, 2, 3, 5, 8)
```

### Ejemplo de Potencia

Este ejemplo muestra una función recursiva que calcula la potencia de un número.

```javascript
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    } else {
        return base * potencia(base, exponente - 1);
    }
}

console.log(potencia(2, 3)); // 8 (2^3 = 2 * 2 * 2)
```

### Ejemplo de Invertir una Cadena

Este ejemplo muestra una función recursiva que invierte una cadena.

```javascript
function invertirCadena(cadena) {
    if (cadena === "") {
        return "";
    } else {
        return invertirCadena(cadena.substr(1)) + cadena.charAt(0);
    }
}

console.log(invertirCadena("hola")); // "aloh"
```

### Consideraciones al usar recursividad

- **Eficiencia**: Algunas funciones recursivas pueden ser ineficientes si realizan muchos cálculos repetidos, como la función de Fibonacci que se muestra arriba. Para mejorar la eficiencia, se pueden usar técnicas como la memoización.
- **Complejidad**: La recursividad puede hacer que el código sea más difícil de entender y depurar. Es importante asegurarse de que el caso base esté correctamente definido para evitar bucles infinitos.
- **Profundidad de la pila**: Las funciones recursivas utilizan la pila de llamadas. Si la recursión es demasiado profunda, puede causar un desbordamiento de pila. Las iteraciones a menudo pueden ser una alternativa más segura para problemas que requieren muchas llamadas recursivas.

---

## Objetos, Clases, Constructores y `this`

### ¿Qué es un objeto?

En JavaScript, un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Los valores de las propiedades pueden ser valores primitivos, objetos u otras funciones.

### Ejemplo Básico

```javascript
const persona = {
    nombre: 'Ana',
    edad: 30,
    saludar: function() {
        console.log('Hola, mi nombre es ' + this.nombre);
    }
};

persona.saludar(); // Hola, mi nombre es Ana
```

En este ejemplo, `persona` es un objeto con propiedades `nombre`, `edad` y un método `saludar`.

### ¿Qué es un constructor?

En JavaScript, un constructor es una función especial que se utiliza para crear y inicializar objetos cuando se utiliza con la palabra clave `new`.

### Ejemplo Básico de Constructor

```javascript
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const persona1 = new Persona('Juan', 25);
console.log(persona1.nombre); // Juan
console.log(persona1.edad);   // 25
```

En este ejemplo, `Persona` es un constructor que inicializa los objetos con propiedades `nombre` y `edad`.

### ¿Qué es una clase?

En JavaScript, una clase es una plantilla para crear objetos. Una clase encapsula datos y funciones que operan sobre esos datos en una sola entidad.

### Ejemplo Básico de Clase

```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log('Hola, mi nombre es ' + this.nombre);
    }
}

const persona1 = new Persona('Carlos', 28);
persona1.saludar(); // Hola, mi nombre es Carlos
```

En este ejemplo, `Persona` es una clase con un constructor y un método `saludar`.

### Uso de `this`

En JavaScript, `this` es una palabra clave que se refiere al objeto actual en el contexto de ejecución. En una función de objeto, `this` se refiere al objeto al que pertenece la función.

#### Ejemplo Básico de `this`

```javascript
const persona = {
    nombre: 'Lucía',
    edad: 32,
    saludar: function() {
        console.log('Hola, mi nombre es ' + this.nombre);
    }
};

persona.saludar(); // Hola, mi nombre es Lucía
```

### Recorrer un Objeto con `for...in`

#### ¿Qué es `for...in`?

El bucle `for...in` itera sobre todas las propiedades enumerables de un objeto.

#### Ejemplo Básico

```javascript
const persona = {
    nombre: 'Lucía',
    edad: 32,
    profesion: 'Ingeniera'
};

for (let propiedad in persona) {
    console.log(propiedad + ': ' + persona[propiedad]);
}

// nombre: Lucía
// edad: 32
// profesion: Ingeniera
```

En este ejemplo, el bucle `for...in` recorre todas las propiedades del objeto `persona` y las imprime.

### Uso de `in` en Objetos

El operador `in` se utiliza para verificar si una propiedad existe en un objeto.

#### Ejemplo Básico

```javascript
const persona = {
    nombre: 'Mario',
    edad: 40
};

console.log('nombre' in persona); // true
console.log('profesion' in persona); // false
```

En este ejemplo, el operador `in` verifica si las propiedades `nombre` y `profesion` existen en el objeto `persona`.

## Ejemplos Prácticos

### Crear un Objeto Usando un Constructor

```javascript
function Animal(tipo, sonido) {
    this.tipo = tipo;
    this.sonido = sonido;
}

const perro = new Animal('Perro', 'Ladrido');
console.log(perro.tipo); // Perro
console.log(perro.sonido); // Ladrido
```

### Definir Métodos en una Clase

```javascript
class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar() {
        console.log(this.marca + ' ' + this.modelo + ' está arrancando.');
    }
}

const miCoche = new Coche('Toyota', 'Corolla');
miCoche.arrancar(); // Toyota Corolla está arrancando.
```

### Herencia en Clases

```javascript
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(this.nombre + ' hace un sonido.');
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log(this.nombre + ' ladra.');
    }
}

const miPerro = new Perro('Rex');
miPerro.hacerSonido(); // Rex ladra.
```

---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)