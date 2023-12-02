function getAll() {
    var request = new XMLHttpRequest();
    request.open('GET', "https://heroku-mysql-b9e2aa5c918c.herokuapp.com/contactos");
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);
        
        console.log("response: " + response);
        console.log("json: " + JSON.stringify(json));
        console.log("status_code: " + request.status);

        const tbody_contactos = document.getElementById("tbody_contactos");
        tbody_contactos.innerHTML = '';

        for (let i = 0; i < json.length; i++) {
            var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            var td_nombre = document.createElement("td");
            var td_telefono = document.createElement("td");
            var td_opciones = document.createElement("td");

            td_email.innerHTML = json[i]["email"];
            td_nombre.innerHTML = json[i]["nombre"];
            td_telefono.innerHTML = json[i]["telefono"];

            var enlaceVer = document.createElement('a');
            enlaceVer.href = 'ver?email=' + json[i]["email"];
            enlaceVer.textContent = 'Ver';
            var enlaceEditar = document.createElement('a');
            enlaceEditar.href = 'editar?email=' + json[i]["email"];
            enlaceEditar.textContent = 'Editar';
            var enlaceBorrar = document.createElement('a');
            enlaceBorrar.href = 'borrar?email=' + json[i]["email"];
            enlaceBorrar.textContent = 'Borrar';

            td_opciones.innerHTML = '';

            td_opciones.appendChild(enlaceVer);
            td_opciones.appendChild(document.createTextNode('   |   ')); // Agregar un separador
            td_opciones.appendChild(enlaceEditar);
            td_opciones.appendChild(document.createTextNode('   |   ')); // Agregar un separador
            td_opciones.appendChild(enlaceBorrar);


            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);
            tr.appendChild(td_opciones);

 
            tbody_contactos.appendChild(tr);
        }
    };
}
