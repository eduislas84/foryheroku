const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

function getContactDetails() {
    var request = new XMLHttpRequest();
    request.open('GET', "https://foryhero-757dbb79eee5.herokuapp.com/contactos/" + email);
    request.send();

    request.onload = function() {
        if (request.status === 200) {
            const response = request.responseText;
            const json = JSON.parse(response);

            document.getElementById('email').value = json.email;
            document.getElementById('nombre').value = json.nombre;
            document.getElementById('telefono').value = json.telefono;
        } else {
            console.error('Error fetching contact details:', request.status, request.statusText);
            alert('Error fetching contact details. Please try again later.');
        }
    };
}

window.onload = getContactDetails;

function goBack() {
    window.history.back();
}

function editar() {
    var newEmail = document.getElementById('email').value;
    var newNombre = document.getElementById('nombre').value;
    var newTelefono = document.getElementById('telefono').value;
    
    if (!newEmail || !newNombre || !newTelefono) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    if (confirm("¿Estás seguro de que deseas actualizar este contacto?")) {
        var request = new XMLHttpRequest();
        request.open('PUT', "https://foryhero-757dbb79eee5.herokuapp.com/contactos/" + email);
        request.setRequestHeader("Content-Type", "application/json");

        var updatedData = {
            email: newEmail,
            nombre: newNombre,
            telefono: newTelefono
        };

        request.send(JSON.stringify(updatedData));

        request.onload = function() {
            if (request.status === 200) {
                alert("Contacto actualizado exitosamente");
                window.history.back();
                window.location.href = "/";
            } else {
                console.error('Error updating contact details:', request.status, request.statusText);
                alert('Error updating contact details. Please try again later.');
            }
        }
    }
}
