import { productos } from "./arrayProducto.js";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("catalogo").innerHTML = cargarProductos("Todas");
    document.getElementById("categoria").addEventListener("change", function() {
        let categoria = this.value;
        document.getElementById("catalogo").innerHTML = cargarProductos(categoria);
    });
});

function cargarProductos(filtroCategoria = "Todas") {
    let html = '';

    let filtrados = productos.filter(producto => {
        return filtroCategoria === "Todas" || producto.categoria === filtroCategoria;
    });

    filtrados.forEach(producto => {
        html += `
            <div class="producto-card">
                <img src="${producto.url}" alt="${producto.nombre}" class="producto-img">
                <span class="producto-nombre">${producto.nombre}</span>
                <p class="producto-precio">$${producto.precio}</p>
                <div class="producto-acciones">
                    <a href="producto.html?id=${producto.id}" class="btn-comprar">Comprar</a>
                </div>
            </div>
        `;
    });
    return html;
}
