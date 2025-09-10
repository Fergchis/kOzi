let usuarios = [];

document.addEventListener("DOMContentLoaded", function () {
    cargarUsuarios();
    configurarFormularioRegistro();
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

function configurarFormularioRegistro() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            registrarUsuario();
        });
    }
}

function validarNombre(nombre) {
    if (nombre.length < 3 || nombre.length > 30) {
        alert("El nombre debe tener al menos 3 caracteres y máximo 30");
        return false;
    }
    return true;
}

function validarEmail(email) {
    if (
        !email.includes("@duoc.cl") &&
        !email.includes("@profesor.duoc.cl") &&
        !email.includes("@gmail.com")
    ) {
        alert("El email debe contener @duoc.cl, @profesor.duoc.cl o @gmail.com");
        return false;
    }
    return true;
}

function validarContrasenia(contrasenia, confirmarContrasenia) {
    if (contrasenia.length < 4 || contrasenia.length > 10) {
        alert("La contraseña debe tener al menos 4 caracteres y máximo 10");
        return false;
    }

    if (contrasenia !== confirmarContrasenia) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    return true;
}

function confirmarEmailUsuario(email) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            alert("El correo de usuario ya existe, prueba con otro");
            return false;
        }
    }
    return true;
}

function guardarUsuarios() {
    let usuariosString = "";
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        usuariosString += `${usuario.nombre}|${usuario.email}|${usuario.tipoUsuario}|${usuario.contrasenia}`;
        if (i < usuarios.length - 1) {
            usuariosString += ",";
        }
    }
    localStorage.setItem("usuarios", usuariosString);
}

function registrarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const tipoUsuario = document.getElementById("tipoUsuario").value;
    const contrasenia = document.getElementById("contrasenia").value;
    const confirmarContrasenia = document.getElementById("confirmarContrasenia").value;

    if (
        validarNombre(nombre) &&
        validarEmail(email) &&
        confirmarEmailUsuario(email) &&
        validarContrasenia(contrasenia, confirmarContrasenia)
    ) {
        const usuario = { nombre, email, tipoUsuario, contrasenia };
        usuarios.push(usuario);
        guardarUsuarios();
        alert("Usuario registrado exitosamente");
        
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contrasenia").value = "";
        document.getElementById("confirmarContrasenia").value = "";
        document.getElementById("tipoUsuario").value = "cliente";
        
        window.location.href = "/html/ingresar.html";
    }
}