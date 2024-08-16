const productos = [
    { id: 1, nombre: "Azucar", precio: 1080 },
    { id: 2, nombre: "Yerba", precio: 1200 },
    { id: 3, nombre: "Café", precio: 6000 },
    { id: 4, nombre: "Miel", precio: 1800 },
    { id: 5, nombre: "Harina", precio: 800 },
    { id: 6, nombre: "Pepsi", precio: 2300 },
]

let carrito = [];


function addToCart(productoID) {
    const product = productos.find(p => p.id === productoID);

    carrito.push({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio
    })
    localStorage.setItem("Cart", JSON.stringify(carrito));
}

document.addEventListener("DOMContentLoaded", function () {
    function renderizarProductos() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
            <p>Nombre: ${producto.nombre} - Precio: $${producto.precio}</p>
            <button onclick="addToCart(${producto.id})" class="button_grey" >Agregar al Carrito</button>
        `
            productList.appendChild(productoDiv);
        })
    }   
    renderizarProductos();

    
});