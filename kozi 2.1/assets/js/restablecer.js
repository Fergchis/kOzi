document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resetForm');
    const emailInput = document.getElementById('emailInput');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const emailValue = emailInput.value;
        
        if (!emailValue.includes("@duoc.cl") && 
            !emailValue.includes("@profesor.duoc.cl") && 
            !emailValue.includes("@gmail.com")) {
            alert("El email debe ser de dominio @duoc.cl, @profesor.duoc.cl o @gmail.com");
            emailInput.focus();
            return;
        }
        
        alert('El correo ha sido enviado');
        
        form.reset();
    });
});