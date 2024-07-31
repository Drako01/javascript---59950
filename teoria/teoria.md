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

---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)