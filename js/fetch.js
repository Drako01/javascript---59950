// fetch(url, config);

// console.log(fetch("http://127.0.0.1:5500/promesas.html"))

// const lista = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts/") // Metodo GET
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach(element => {
//             const li = document.createElement("li");
//             li.innerHTML = `
//                 <h3>${element.id}</h3>
//                 <h4>${element.title}</h4>
//                 <p>${element.body}</p>    
//             `
//             lista.appendChild(li);
//         });
//     })

// fetch("https://jsonplaceholder.typicode.com/posts/", 
//     {
//         method: "POST",
//         body: JSON.stringify(
//             {
//                 title: "Nuevo Objeto",
//                 userId: 1,
//                 body: "POSTEO NUEVO"
//             }
//         ),
//         headers: {
//             "Content-type" : "application/json; charset=UTF-8"
//         }
//     }
// ) // Metodo GET
//     .then((response) => response.json())
//     .then((data) => console.log(data))


// fetch("https://jsonplaceholder.typicode.com/posts/1", 
//     {
//         method: "PUT",
//         body: JSON.stringify(
//             {
//                 title: "Nuevo Objeto Modificado",
//                 userId: 1,
//                 body: "POSTEO NUEVO"
//             }
//         ),
//         headers: {
//             "Content-type" : "application/json; charset=UTF-8"
//         }
//     }
// ) // Metodo GET
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// fetch("https://jsonplaceholder.typicode.com/posts/2", 
//         {
//             method: "DELETE",           
//             headers: {
//                 "Content-type" : "application/json; charset=UTF-8"
//             }
//         }
//     ) // Metodo GET
//         .then((response) => response.json())
//         .then((data) => console.log(data))

const cardsProd = document.getElementById("cards");

// fetch("/productos.json")
//     .then((response) => response.json())
//     .then((data) => {

//         for (item of data) {
//             const card = document.createElement("div");
//             card.innerHTML = `
//             <div class="card" style="width: 18rem; height: 32rem;">
//                 <img class="card-img-top" src=${item.imagen} alt=${item.nombre} />
//                 <div class="card-body">
//                     <h5 class="card-title">${item.nombre}</h5>
//                     <p class="card-text">Descripcion: ${item.descripcion}</p>
//                     <p class="card-text">Precio: $${item.precio}.-</p>
//                     <p class="card-text">Stock: ${item.stock}</p>
//                     <a href="#" class="btn btn-success">Comprar</a>
//                 </div>
//             </div>
//         `

//             cardsProd.appendChild(card);
//         };
//     })

const peticionA = async () => {
    const respuesta = await fetch("/productos.json");
    const datos = await respuesta.json();
    const data = await datos;

    for (item of data) {
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src=${item.imagen} alt=${item.nombre} />
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">Descripcion: ${item.descripcion}</p>
                    <p class="card-text">Precio: $${item.precio}.-</p>
                    <p class="card-text">Stock: ${item.stock}</p>
                    <a href="#" class="btn btn-success">Comprar</a>
                </div>
            </div>
        `
        cardsProd.appendChild(card);
    };
}

peticionA();

const peticionML = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Kappa');
    const datos = await respuesta.json();
    const data = await datos.results
    console.log(data);
    for( item of data ) {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src=${item.thumbnail} alt=${item.title} />
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">Proveedor: ${item.official_store_name}</p>
                    <p class="card-text">Precio: $${item.price}.-</p>
                    <a href="#" class="btn btn-success">Comprar</a>
                </div>
            </div>
        `
        cardsProd.appendChild(card);
    }
}

peticionML();