function post() {
    var email = document.getElementById('email').value;
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;

    if (!email || !nombre || !telefono) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    var request = new XMLHttpRequest();
    var url = 'https://foryhero-757dbb79eee5.herokuapp.com/contactos'; // Corregí la URL

    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json');

    var requestBody = JSON.stringify({
        email: email,
        nombre: nombre,
        telefono: telefono
    });

    request.send(requestBody);

    request.onload = function () {
        if (request.status === 200) {
            // Datos guardados correctamente
            document.getElementById('email').value = '';
            document.getElementById('nombre').value = '';
            document.getElementById('telefono').value = '';
            alert('Datos guardados exitosamente');
        } else {
            // Error al guardar datos
            console.error('Error al enviar datos:', request.status, request.statusText);

            if (request.status === 400) {
    // Error específico de contacto duplicado
    alert('El contacto ya existe. Por favor, ingrese un correo diferente.');
} else {
    // Otros errores
    alert('Ocurrió un problema al guardar los datos. El contacto ya existe. Por favor, ingrese un correo diferente.');
}

        }
    };

    // Manejar errores de red
    request.onerror = function () {
        console.error('Error de red al enviar datos');
        alert('Ocurrió un problema de red al intentar guardar los datos. Por favor, inténtelo nuevamente más tarde.');
    };
}
