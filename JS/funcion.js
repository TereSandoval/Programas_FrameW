function calcularSuperficie() {
    // Obtener los valores 
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    
    // Verificar que los valores no estén vacíos
    if (base && altura) {
        // Convertir los valores a números
        base = parseFloat(base);
        altura = parseFloat(altura);
        
        // Calcular el area
        var superficie = (base * altura) / 2;
        
        // Mostrar el resultado 
        document.getElementById("resultado").innerText = "La superficie del triángulo es: " + superficie + " cm";
    } else {
        // Mostrar mensaje de error si faltan valores
        document.getElementById("resultado").innerText = "Por favor, introduce la base y la altura.";
    }
}
