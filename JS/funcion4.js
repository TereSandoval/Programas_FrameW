function calcularPromedio() {
    // Obtener las calificaciones de las materias
    let materia1 = document.getElementById("materia1").value;
    let materia2 = document.getElementById("materia2").value;
    let materia3 = document.getElementById("materia3").value;

    // Convertir los valores a números
    materia1 = parseFloat(materia1);
    materia2 = parseFloat(materia2);
    materia3 = parseFloat(materia3);

        // Calcular el promedio
        let promedio = (materia1 + materia2 + materia3) / 3;

        // Mostrar el resultado en la página
        document.getElementById("promedio").innerText = "El promedio del alumno es: " + promedio;

}
