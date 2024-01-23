function crearCampos() {
    // Obtener el número de conjuntos ingresado por el usuario
    var numConjuntos = document.getElementById('numConjuntos').value;

    // Obtener el div donde se colocarán los campos de entrada
    var contenedor = document.getElementById('contenedorConjuntos');
    // Limpiar el contenido existente
    contenedor.innerHTML = '';

    // Crear campos para cada conjunto
    for (var i = 0; i < numConjuntos; i++) {
        const label = document.createElement('label');
        label.innerHTML = 'Conjunto ' + (i + 1) + ': ';

        var input = document.createElement('input');
        input.type = 'text';
        input.name = 'conjunto' + (i + 1);

        // Agregar un salto de línea para separar cada conjunto
        contenedor.appendChild(label);
        contenedor.appendChild(input);
        contenedor.appendChild(document.createElement('br'));
    }
}

function procesarConjuntos() {
    // Obtener el número de conjuntos ingresado por el usuario
    var numConjuntos = document.getElementById('numConjuntos').value;

    // Arreglo para almacenar los conjuntos ingresados
    var conjuntos = [];

    // Obtener los valores de cada conjunto y guardarlos en el arreglo
    for (var i = 0; i < numConjuntos; i++) {
        var inputName = 'conjunto' + (i + 1);
        var inputValue = document.getElementsByName(inputName)[0].value;

        // Dividir el valor del conjunto por comas y agregarlo al arreglo
        var conjuntoArray = inputValue.split(',');

        // Eliminar espacios en blanco alrededor de cada elemento
        conjuntoArray = conjuntoArray.map(function (element) {
            return element.trim();
        });

        conjuntos.push(conjuntoArray);
    }

    // Unir los valores de cada conjunto en un solo conjunto
    var conjuntoFinal = [].concat(...conjuntos);

    // Mostrar el resultado en el documento
    var resultadoConjunto = document.getElementById('resultadoConjunto');
    resultadoConjunto.innerHTML = '<p>Conjunto obtenido:</p>' + formatConjunto(conjuntoFinal);
}

// Función para formatear un conjunto en el formato {1,2,3,...}
function formatConjunto(conjunto) {
    return '{' + conjunto.join(',') + '}';
}




//-------------------------------------------
//Seccion del diseñño de la pagina

document.addEventListener("click", function (event) {
    var menu = document.getElementById("menu");
    if (!menu.contains(event.target) && !document.querySelector(".nav_target").contains(event.target)) {
        location.hash = ""; // Limpia el fragmento de la URL para ocultar el menú
    }
});