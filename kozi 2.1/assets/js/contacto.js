let formularios = [];

document.addEventListener('DOMContentLoaded', cargarFormularios);

function validarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (nombre.length < 3 || nombre.length > 30) {
        alert("El nombre debe tener entre 3 y 30 caracteres.");
        return false;
    }

    if (!email.includes("@duoc.cl") && !email.includes("@profesor.duoc.cl") && !email.includes("@gmail.com")) {
        alert("El email debe ser de dominio @duoc.cl, @profesor.duoc.cl o @gmail.com");
        return false;
    }

    const nuevoFormulario = {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
    };

    formularios.push(nuevoFormulario);

    alert("Formulario enviado con éxito.");
    
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
    
    return true;
}

