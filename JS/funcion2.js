function mostrarDatos() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;

    // Verificar que todos los campos tengan datos
    if (nombre && edad && email && telefono && direccion) {
        // Mostrar los datos en los elementos correspondientes
        document.getElementById("resultado-nombre").innerText = "Nombre: " + nombre;
        document.getElementById("resultado-edad").innerText = "Edad: " + edad;
        document.getElementById("resultado-email").innerText = "Correo Electrónico: " + email;
        document.getElementById("resultado-telefono").innerText = "Teléfono: " + telefono;
        document.getElementById("resultado-direccion").innerText = "Dirección: " + direccion;
    } else {
        // Mostrar un mensaje de error si falta algún campo
        alert("Por favor, completa todos los campos.");
    }
}
