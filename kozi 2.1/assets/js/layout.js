const isIndex = window.location.pathname.endsWith("index.html");

window.onload = function() {
    document.getElementById("header").innerHTML = header();
    document.getElementById("footer").innerHTML = footer();
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/css/layout.css"; 
    document.head.appendChild(link);
    
    const iconsLink = document.createElement("link");
    iconsLink.rel = "stylesheet";
    iconsLink.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    document.head.appendChild(iconsLink);
};

function haySesionActiva() {
    return localStorage.getItem("usuarioActivoNombre") !== null;
}

function cerrarSesion() {
    localStorage.removeItem("usuarioActivoNombre");
    localStorage.removeItem("usuarioActivoEmail");
    localStorage.removeItem("usuarioActivoTipo");
    alert("Sesión cerrada correctamente");
    window.location.href = "/index.html"; 
}

function header() {
    const tieneSesion = haySesionActiva();
    
    return `
        <a href="/index.html" class="logo ${isIndex && "logoAnimation"}">kÖzi</a>
        <nav class="${isIndex ? "navbarAnimation" : "navbar"}">
            ${tieneSesion ? 
                `<a href="#" onclick="cerrarSesion()">Desconectar</a>` : 
                `<a href="/html/ingresar.html">Ingresar</a>`
            }
            <a href="/html/catalogo.html">Catalogo</a>
            <a href="/html/contacto.html">Nosotros</a>
        </nav>
        <div class="${isIndex ? "social-media-animation" : "social-media"}">
            <a href="#"><i class='bx bxl-twitter'></i></a>
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
        </div>
    `;
}

function footer() {
    const tieneSesion = haySesionActiva();
    
    return `
        <div class="footer-content wrap">
            <div class="footer-section">
                <h3>kÖzi</h3>
                <p>Expresión en la oscuridad. Encuentra tu estilo único con nuestras pieces exclusivas.</p>
            </div>
            <div class="footer-section">
                <h3>Enlaces rápidos</h3>
                <ul>
                    <li><a href="/index.html">Inicio</a></li>
                    <li><a href="/html/catalogo.html">Catálogo</a></li>
                    <li><a href="/html/contacto.html">Contacto</a></li>
                    <li>${tieneSesion ? 
                        `<a href="#" onclick="cerrarSesion()">Desconectar</a>` : 
                        `<a href="/html/ingresar.html">Ingresar</a>`
                    }</li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contacto</h3>
                <p>email: info@kozi.com</p>
                <p>teléfono: +56912345678</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 kÖzi - Todos los derechos reservados</p>
        </div>
    `;
}