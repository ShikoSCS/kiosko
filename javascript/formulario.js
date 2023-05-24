document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();


    if (validarFormulario()) {
        this.submit();
    }
});

function validarFormulario() {

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var comentarios = document.getElementById('comentarios').value;


    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }

    if (apellido.trim() === '') {
        alert('Por favor, ingresa tu apellido.');
        return false;
    }

    if (telefono.trim() === '') {
        alert('Por favor, ingresa tu teléfono.');
        return false;
    }

    if (email.trim() === '') {
        alert('Por favor, ingresa tu email.');
        return false;
    }

    if (comentarios.trim() === '') {
        alert('Por favor, ingresa tus comentarios.');
        return false;
    }

    return true;
}