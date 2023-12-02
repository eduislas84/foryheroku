const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

function getContactDetails() {
    var request = new XMLHttpRequest();
    request.open('GET', "https://foryhero-757dbb79eee5.herokuapp.com/contactos/" + email);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);

        document.getElementById('email').textContent = json.email;
        document.getElementById('nombre').textContent = json.nombre;
        document.getElementById('telefono').textContent = json.telefono;
        console.log(json.email);
    };
}

window.onload = getContactDetails;

function goBack() {
    window.history.back();
}

function borrar() {
    if (confirm("¿Estás seguro de que deseas borrar este contacto?")) {
        var request = new XMLHttpRequest();
        request.open('DELETE', "https://foryhero-757dbb79eee5.herokuapp.comcontactos/" + email);
        request.send();

        request.onload = (e) => {
            const response = request.responseText;
            const json = JSON.parse(response);
            
            alert("Contacto borrado exitosamente");
            window.history.back();
            window.location.href = "/";
            
        };
    }
}
