# Problema: Simulador de Gestión de Inventario de una Tienda (Versión Avanzada)

**Descripción:**

Desarrolla un simulador interactivo de gestión de inventario de una tienda utilizando JavaScript, manipulación del DOM, y arrays. Este simulador debe permitir a los usuarios gestionar el inventario directamente desde la interfaz web, con todas las operaciones actualizándose en tiempo real en la página.

**Requisitos:**

1. **Interfaz de Usuario (UI):**
   - Crea una interfaz web sencilla donde el usuario pueda:
     - Ingresar el nombre, precio, y cantidad de un producto para agregarlo al inventario.
     - Seleccionar un producto para vender y especificar la cantidad vendida.
     - Ver una lista actualizada de todos los productos en el inventario.

2. **Clases y Métodos:**
   - Implementa una clase `Producto` que tenga atributos para el nombre, el precio y la cantidad en stock. La clase también debe tener métodos para:
     - Vender el producto (reduciendo el stock).
     - Mostrar la información del producto.
   - Implementa una clase `Inventario` que use un array para almacenar los productos y tenga métodos para:
     - Agregar un nuevo producto.
     - Vender un producto, buscando por nombre.
     - Mostrar el inventario completo.

3. **Manipulación del DOM:**
   - Usa el DOM para actualizar dinámicamente la interfaz de usuario cuando:
     - Se agrega un nuevo producto.
     - Se vende un producto.
     - Se muestra la lista completa de productos en el inventario.

4. **Operadores Avanzados y Sugar Syntax:**
   - Aprovecha los operadores avanzados de JavaScript como el spread operator para clonar objetos o arrays cuando sea necesario.
   - Utiliza sintaxis simplificada y moderna (e.g., arrow functions, destructuring) para mejorar la legibilidad y eficiencia del código.

5. **Promesas y Asincronía:**
   - Si es posible, implementa una funcionalidad que simule la carga o actualización de datos usando promesas o `async/await`. Por ejemplo, podrías simular una consulta a una "base de datos" local usando `setTimeout` para esperar unos segundos antes de actualizar la interfaz.

**Ejemplo de Uso:**

1. El usuario ingresa un nuevo producto: "Manzanas", $1.50, 30 unidades, y el producto se muestra instantáneamente en la lista de inventario.
2. El usuario selecciona "Manzanas" y vende 5 unidades. La lista de inventario se actualiza automáticamente para reflejar el nuevo stock.
3. El usuario agrega otro producto: "Naranjas", $2.00, 20 unidades, que se agrega a la lista de productos.
4. El usuario puede visualizar el inventario completo actualizado en la interfaz en cualquier momento.
5. Si decides implementar la funcionalidad asincrónica, el usuario podría ver una breve "carga" simulada antes de que se actualicen los datos.

**Extensiones:**
- **Filtros y Búsqueda:** Agrega una funcionalidad que permita al usuario filtrar los productos por nombre o precio.
- **Persistencia:** Usa `localStorage` para almacenar el inventario, de modo que los datos se mantengan incluso si el usuario recarga la página.
- **Interfaz de Librería:** Si ya están familiarizados con librerías como React, considera una versión del problema que utilice componentes para gestionar la UI.

---



<p align="center"> 
    <img src="https://jobs.coderhouse.com/assets/logos_coderhouse.png" alt="CoderHouse"  height="100"/>
</p>

<p align="center"> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Documentacion Oficial de JavaScript</a>
</p>



---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)