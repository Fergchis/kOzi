import { productos } from "./arrayProducto.js";

document.addEventListener('DOMContentLoaded', function() {
    renderizarProducto();

    document.getElementById('botonComprar').addEventListener('click', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const productoId = urlParams.get('id');
        agregarAlCarrito(parseInt(productoId));
    });
});
 
function renderizarProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    const producto = urlParams.get('id');
    const productoEncontrado = productos.find(prod => prod.id == producto);
    if (productoEncontrado) {
        document.getElementById("imgProducto").src = productoEncontrado.url;
        document.getElementById("nombreProducto").innerText = productoEncontrado.nombre;
        document.getElementById("categoriaProducto").innerText = productoEncontrado.categoria;
        document.getElementById("precioProducto").innerText = "$" + productoEncontrado.precio;
    } else {
        document.getElementById("nombreProducto").innerText = "Producto no encontrado";
        document.getElementById("categoriaProducto").innerText = "";
        document.getElementById("precioProducto").innerText = "";
        document.getElementById("imgProducto").src = "";
    }
}

function agregarAlCarrito(id) {
    let producto = productos.find(p => p.id === id);
    
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExistente = carrito.find(item => item.id === id);
    
    if (productoExistente) {
        productoExistente.cantidad = (productoExistente.cantidad || 1) + 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    alert(`${producto.nombre} agregado al carrito`);
}