function calcularNomina() {
    var sueldo1 = parseFloat(document.getElementById("sueldo1").value);
    var sueldo2 = parseFloat(document.getElementById("sueldo2").value);
    var sueldo3 = parseFloat(document.getElementById("sueldo3").value);
    var sueldo4 = parseFloat(document.getElementById("sueldo4").value);
    var sueldo5 = parseFloat(document.getElementById("sueldo5").value);
    
        // Calcular la nómina total
        var nominaTotal = sueldo1 + sueldo2 + sueldo3 + sueldo4 + sueldo5;

        // Mostrar el resultado en la página
        document.getElementById("nominaTotal").innerText = "La nómina total a pagar es: $" + nominaTotal;
    
}
