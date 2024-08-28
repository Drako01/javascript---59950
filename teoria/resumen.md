# Clase 15

## **Programación Asíncrona en JavaScript**

La programación asíncrona permite que JavaScript realice tareas que pueden tardar algún tiempo (como obtener datos de un servidor) sin bloquear la ejecución de otros códigos. Esto es fundamental para que las aplicaciones web sean rápidas y receptivas. Vamos a desglosar los conceptos clave y las funciones relacionadas.

---

### **1. `setTimeout()`**
**`setTimeout()`** es una función que retrasa la ejecución de un bloque de código durante un tiempo determinado en milisegundos.

**Sintaxis:**
```javascript
setTimeout(funcionAEjecutar, retrasoEnMilisegundos);
```

**Ejemplo:**
```javascript
console.log("Hola");

setTimeout(() => {
    console.log("Este mensaje se retrasa 2 segundos");
}, 2000);

console.log("Mundo");
```

**Explicación:**
- **Salida:** Primero se imprime "Hola", luego "Mundo", y después de 2 segundos, aparece el mensaje retrasado.
- `setTimeout` no detiene la ejecución del código, solo programa la ejecución del bloque de código después del tiempo especificado.

---

### **2. Call Stack (Pila de Llamadas)**

La **Call Stack** es una estructura de datos que sigue el principio LIFO (Last In, First Out). En JavaScript, es donde se almacenan las funciones que están en ejecución. Cuando llamas a una función, esta se apila en la Call Stack. Cuando la función termina, se elimina de la Call Stack.

**Ejemplo:**
```javascript
function saludo() {
    console.log("Hola");
}

function despedida() {
    console.log("Adiós");
    saludo();
}

despedida();
```

**Explicación:**
- **Call Stack:** Primero se apila `despedida`, luego `saludo`, y después de ejecutar `saludo`, se elimina y vuelve a `despedida` hasta que también se elimina.

---

### **3. Event Loop (Bucle de Eventos)**

El **Event Loop** es el mecanismo que permite que JavaScript maneje operaciones asíncronas. Revisa continuamente la Call Stack y la **Callback Queue** (cola de llamadas) para ver si hay funciones listas para ejecutarse.

**Cómo Funciona:**
- Si la Call Stack está vacía, el Event Loop toma la primera función en la Callback Queue y la coloca en la Call Stack para ejecutarse.

---

### **4. Callback Queue (Cola de Llamadas)**

La **Callback Queue** es una cola donde se colocan las funciones asíncronas que están listas para ejecutarse una vez que la Call Stack esté vacía.

**Ejemplo con `setTimeout`:**
```javascript
console.log("Inicio");

setTimeout(() => {
    console.log("Tarea Asíncrona");
}, 0);

console.log("Fin");
```

**Explicación:**
- Aunque `setTimeout` tiene un retraso de 0 milisegundos, se coloca en la Callback Queue y se ejecutará solo cuando la Call Stack esté vacía, por eso "Inicio" y "Fin" se imprimen antes que "Tarea Asíncrona".

---

### **5. `setInterval()`**
**`setInterval()`** es una función que ejecuta un bloque de código repetidamente con un retraso fijo entre cada ejecución.

**Sintaxis:**
```javascript
setInterval(funcionAEjecutar, intervaloEnMilisegundos);
```

**Ejemplo:**
```javascript
setInterval(() => {
    console.log("Este mensaje se muestra cada 3 segundos");
}, 3000);
```

**Explicación:**
- El mensaje se imprimirá cada 3 segundos de manera indefinida hasta que se detenga con `clearInterval()`.

---

### **6. `clearTimeout()` y `clearInterval()`**
**`clearTimeout()`** se utiliza para cancelar un `setTimeout` antes de que se ejecute.

**Ejemplo:**
```javascript
let temporizador = setTimeout(() => {
    console.log("Esto no se verá nunca");
}, 5000);

clearTimeout(temporizador);
```

**Explicación:**
- Aquí, el temporizador se cancela antes de que pase el tiempo, por lo que el mensaje nunca se imprimirá.

**`clearInterval()`** funciona de manera similar para detener un `setInterval`.

**Ejemplo:**
```javascript
let contador = setInterval(() => {
    console.log("Esto se repetirá hasta que lo detengamos");
}, 2000);

setTimeout(() => {
    clearInterval(contador);
}, 10000); // Detiene después de 10 segundos
```

**Explicación:**
- El intervalo se ejecutará cinco veces antes de ser detenido.

---

### **7. Promesas (Promises)**
Una **Promesa** es un objeto que representa el eventual resultado de una operación asíncrona. Puede estar en uno de tres estados:

- **Pendiente (Pending):** La operación aún no se ha completado.
- **Resuelta (Fulfilled):** La operación se completó con éxito.
- **Rechazada (Rejected):** La operación falló.

**Sintaxis:**
```javascript
let promesa = new Promise((resolve, reject) => {
    // operación asíncrona
    if (todoBien) {
        resolve("¡Éxito!");
    } else {
        reject("Hubo un error");
    }
});
```

---

### **8. `resolve` y `reject`**
Estas son funciones que se utilizan dentro de la promesa para cambiar su estado:

- **`resolve(value):`** Cambia el estado de la promesa a "resuelta" con un valor.
- **`reject(error):`** Cambia el estado de la promesa a "rechazada" con un error.

**Ejemplo:**
```javascript
let promesa = new Promise((resolve, reject) => {
    let exito = true;
    if (exito) {
        resolve("Operación exitosa");
    } else {
        reject("Operación fallida");
    }
});

promesa
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));
```

**Explicación:**
- Si `exito` es `true`, se llama a `resolve` y el mensaje de éxito se imprime. Si no, se llama a `reject` y se imprime el mensaje de error.

---

### **9. `then`, `catch`, y `finally`**

- **`then(onFulfilled, onRejected):`** Se ejecuta cuando la promesa se resuelve exitosamente. Si también se pasa un segundo argumento, este se ejecuta si la promesa es rechazada.
- **`catch(onRejected):`** Se ejecuta si la promesa es rechazada (es un atajo para `then(null, onRejected)`).
- **`finally(onFinally):`** Se ejecuta independientemente de si la promesa fue resuelta o rechazada.

**Ejemplo Completo:**
```javascript
let promesa = new Promise((resolve, reject) => {
    let exito = true;
    if (exito) {
        resolve("Operación exitosa");
    } else {
        reject("Operación fallida");
    }
});

promesa
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Esto se ejecuta siempre, éxito o fallo.");
    });
```

**Explicación:**
- El `finally` se ejecuta al final sin importar si la promesa fue exitosa o no.


---



<p align="center"> 
    <img src="https://jobs.coderhouse.com/assets/logos_coderhouse.png" alt="CoderHouse"  height="100"/>
</p>

<p align="center"> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Documentacion Oficial de JavaScript</a>
</p>



---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)