const productosBasicos = [
    { id: 7, nombre: "Chivito", precio: 1800 },
    { id: 8, nombre: "Coca Cola", precio: 1600 },
    { id: 9, nombre: "Miel", precio: 2300 }
]

const productos = [
    { id: 1, nombre: "Azucar", precio: 1080 },
    { id: 2, nombre: "Yerba", precio: 1200 },
    { id: 3, nombre: "Café", precio: 6000 },
    { id: 4, nombre: "Miel", precio: 1800 },
    { id: 5, nombre: "Harina", precio: 800 },
    { id: 6, nombre: "Pepsi", precio: 2300 },
    ...productosBasicos
]

let carrito = [];

console.log(productos);
function addToCart(productoID) {
    const product = productos.find(p => p.id === productoID);
    
    carrito.push({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio
    })
    // Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: `El ${product.nombre} se agrego al Carrito.!`,
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true
    // });
    Toastify({
        text: `Se agrego ${product.nombre} al Carrito.!`,        
        duration: 3000        
        }).showToast();

    localStorage.setItem("Cart", JSON.stringify(carrito));
}

document.getElementById("clear-cart").addEventListener('click', () => {
    localStorage.removeItem("Cart")
})

document.addEventListener("DOMContentLoaded", function () {
    function renderizarProductos(productosFiltrados = productos) {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
        productosFiltrados.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
                <p>Nombre: ${producto.nombre} - Precio: $${producto.precio}</p>
                <button onclick="addToCart(${producto.id})" class="button_grey" >Agregar al Carrito</button>
            `;
            productList.appendChild(productoDiv);
        });
    }

    const buscadorInput = document.getElementById('buscador-input');
    buscadorInput.addEventListener('input', function () {
        const textoBusqueda = buscadorInput.value.toLowerCase();
        const productosFiltrados = productos.filter(producto => 
            producto.nombre.toLowerCase().includes(textoBusqueda)
        );
        renderizarProductos(productosFiltrados);
    });

    renderizarProductos();
});