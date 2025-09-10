let usuarios = [];

document.addEventListener("DOMContentLoaded", function () {
    cargarUsuarios();
    configurarFormularioIngreso();
    verificarSesionActiva();
});

function cargarUsuarios() {
    const usuariosGuardados = localStorage.getItem("usuarios");
    if (usuariosGuardados) {
        const usuariosArray = usuariosGuardados.split(",");
        for (let i = 0; i < usuariosArray.length; i++) {
            const usuarioData = usuariosArray[i].split("|");
            if (usuarioData.length === 4) {
                usuarios.push({
                    nombre: usuarioData[0],
                    email: usuarioData[1],
                    tipoUsuario: usuarioData[2],
                    contrasenia: usuarioData[3],
                });
            }
        }
    }
}

function configurarFormularioIngreso() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            iniciarSesion();
        });
    }
}

function verificarSesionActiva() {
    const nombre = localStorage.getItem("usuarioActivoNombre");
    if (nombre) {
        window.location.href = "/index.html";
    }
}

function iniciarSesion() {
    const email = document.getElementById("email").value;
    const contrasenia = document.getElementById("contrasenia").value;

    for (let i = 0; i < usuarios.length; i++) {
        if (
            usuarios[i].email === email &&
            usuarios[i].contrasenia === contrasenia
        ) {
            alert("Inicio de sesión exitoso");
            alert(`Bienvenido: ${usuarios[i].nombre} (${usuarios[i].tipoUsuario})`);

            localStorage.setItem("usuarioActivoNombre", usuarios[i].nombre);
            localStorage.setItem("usuarioActivoEmail", usuarios[i].email);
            localStorage.setItem("usuarioActivoTipo", usuarios[i].tipoUsuario);

            document.getElementById("email").value = "";
            document.getElementById("contrasenia").value = "";

            window.location.href = "/index.html";
            
            return;
        }
    }
    alert("Correo electrónico o contraseña incorrectos");
}

function cerrarSesion() {
    localStorage.removeItem("usuarioActivoNombre");
    localStorage.removeItem("usuarioActivoEmail");
    localStorage.removeItem("usuarioActivoTipo");
    alert("Sesión cerrada correctamente");
    window.location.href = "/html/ingresar.html";
}