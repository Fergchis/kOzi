document.addEventListener('DOMContentLoaded', function() {
    mostrarCarrito();
});

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenedor = document.getElementById("carrito");
    contenedor.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>No hay productos en el carrito</p>";
        document.getElementById("total").innerText = "Total: $0";
        return;
    }

    carrito.forEach((producto, index) => {
        let subtotal = producto.precio * (producto.cantidad || 1);
        total += subtotal;

        contenedor.innerHTML += `
            <div class="producto-carrito">
                <img src="${producto.url}" alt="${producto.nombre}" width="50">
                <div>
                    <h2>${producto.nombre}</h2>
                    <p>Precio: $${producto.precio} | Cantidad: ${producto.cantidad || 1}</p>
                    <p>Subtotal: $${subtotal}</p>
                </div>
                <button onclick="eliminarDelCarrito(${index})">❌</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = "Total: $" + total;
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function comprar() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }
    alert("¡Gracias por tu compra!");
    localStorage.removeItem("carrito");
    mostrarCarrito();
}
