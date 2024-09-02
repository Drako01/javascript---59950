
# Conceptos de Asincronía en JavaScript

## AJAX
AJAX (Asynchronous JavaScript and XML) es una técnica para crear aplicaciones web más dinámicas y rápidas. Permite que las páginas web se actualicen de forma asíncrona, enviando y recibiendo datos desde un servidor en segundo plano sin necesidad de recargar la página completa.

## Modelo Cliente-Servidor
El modelo cliente-servidor es una arquitectura donde un cliente (normalmente un navegador web) solicita recursos o servicios a un servidor, el cual procesa estas solicitudes y responde con los datos necesarios. Este modelo es fundamental en las aplicaciones web modernas, donde el cliente y el servidor pueden estar ubicados en diferentes lugares y comunicarse a través de la red.

## Peticiones HTTP
Las peticiones HTTP (Hypertext Transfer Protocol) son la base de la comunicación en la web. Un cliente (como un navegador) envía una petición HTTP a un servidor, y este responde con la información solicitada. Las peticiones HTTP constan de varias partes: un método (GET, POST, etc.), una URL, headers, y opcionalmente un body.

## Una URL o dirección
Una URL (Uniform Resource Locator) es la dirección que se utiliza para acceder a un recurso en la web. Las URLs tienen varios componentes, como el protocolo (http o https), el dominio, la ruta, y opcionalmente, parámetros de consulta o fragmentos.

Ejemplo:
```
https://www.ejemplo.com/busqueda?categoria=ropa&color=azul&talla=M
```

## Un método (GET, POST, PUT, DELETE)
Los métodos HTTP especifican la acción que se desea realizar con la petición. Los más comunes son:

- **GET**: Solicita un recurso del servidor.
- **POST**: Envía datos al servidor para crear un nuevo recurso.
- **PUT**: Actualiza un recurso existente en el servidor.
- **DELETE**: Elimina un recurso del servidor.

## Headers
Los headers HTTP son parte de las peticiones y respuestas que contienen metadatos sobre la comunicación. Incluyen información como el tipo de contenido, la longitud del contenido, autenticación, entre otros.

## Body
El body (cuerpo) de una petición HTTP es la parte donde se envían los datos. Es común en peticiones POST y PUT, donde se envía información al servidor, como formularios o JSON.

## Parámetros (Query Params o URL Params)
Los parámetros de URL son valores que se pasan en la URL para modificar la solicitud. Se dividen en dos tipos:

- **Query Params**: Se añaden al final de la URL después del símbolo `?` y se separan con `&`. Ejemplo: `?categoria=ropa&color=azul`.
- **URL Params**: Son parte de la ruta de la URL y suelen usarse para identificar recursos específicos. Ejemplo: `/usuarios/123`.

## API
Una API (Application Programming Interface) es un conjunto de reglas y protocolos que permiten la comunicación entre diferentes aplicaciones. En el contexto de la web, las APIs se utilizan para que las aplicaciones web puedan interactuar con servidores y acceder a datos o servicios.

## API - Estados de Petición
Los estados de una petición HTTP son códigos que indican el resultado de la solicitud. Algunos de los más comunes son:

- **200 OK**: La petición fue exitosa.
- **404 Not Found**: El recurso solicitado no fue encontrado.
- **500 Internal Server Error**: Ocurrió un error en el servidor.

## Fetch
`fetch` es una función de JavaScript que permite hacer peticiones HTTP. Es una alternativa moderna a `XMLHttpRequest` y se usa para obtener o enviar datos de forma asíncrona.

```javascript
fetch('https://api.ejemplo.com/datos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## Response - Analizar Respuestas
Cuando se realiza una petición con `fetch`, la respuesta se maneja con promesas. La respuesta puede ser procesada en varios formatos, como JSON, texto, o blob.

## Respuestas
Las respuestas HTTP son lo que el servidor devuelve tras recibir una petición. Contienen un código de estado, headers, y opcionalmente un body con datos.

## Enviando Datos con POST
Para enviar datos al servidor utilizando el método POST, se incluye un body en la petición, que generalmente se envía en formato JSON.

```javascript
fetch('https://api.ejemplo.com/crear', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ nombre: 'Juan', edad: 30 })
})
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
```

## Rutas Relativas
Las rutas relativas son aquellas que no incluyen el dominio completo, sino que se relacionan con la ubicación actual de la aplicación. Ejemplo: `./imagenes/logo.png`.

## Async - Await
`async` y `await` son palabras clave de JavaScript que permiten manejar código asíncrono de manera más legible. `async` se usa para declarar una función asíncrona y `await` se usa para esperar a que una promesa se resuelva.

```javascript
async function obtenerDatos() {
  try {
    const response = await fetch('https://api.ejemplo.com/datos');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

```

---



<p align="center"> 
    <img src="https://jobs.coderhouse.com/assets/logos_coderhouse.png" alt="CoderHouse"  height="100"/>
</p>

<p align="center"> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Documentacion Oficial de JavaScript</a>
</p>



---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)