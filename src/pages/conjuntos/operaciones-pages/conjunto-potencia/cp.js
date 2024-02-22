function limpiarContenido() {
    var contenedor = document.getElementById('contenedorConjuntos');
    var resultadoConjunto = document.getElementById('resultadoConjunto');

    // Limpiar el contenido del contenedor de conjuntos
    contenedor.innerHTML = '';

    // Limpiar el contenido del resultado
    resultadoConjunto.innerHTML = '';
    resultadoConjunto.style.display = 'none';

    var menu = document.getElementById('menu');
    menu.style.zIndex = '1';  // Restaura el z-index del menú cuando se limpia el contenido
}

function calcularConjuntoPotencia() {
    // Obtener el conjunto ingresado por el usuario
    var conjuntoIngresado = document.getElementById('numConjuntos').value;

    // Dividir el valor del conjunto por comas y agregarlo al arreglo
    var conjuntoArray = conjuntoIngresado.split(',');

    // Eliminar espacios en blanco alrededor de cada elemento
    conjuntoArray = conjuntoArray.map(function (element) {
        return element.trim();
    });

    // Calcular el conjunto potencia
    var conjuntoPotencia = obtenerConjuntoPotencia(conjuntoArray);

    // Mostrar el conjunto potencia y sus subconjuntos
    mostrarConjuntoPotencia(conjuntoPotencia);
    console.log("Proceso completado.");
}

function obtenerConjuntoPotencia(conjunto) {
    var potencia = [[]];

    for (var i = 0; i < conjunto.length; i++) {
        var currentElement = conjunto[i];
        var currentSubsetCount = potencia.length;

        for (var j = 0; j < currentSubsetCount; j++) {
            var currentSubset = potencia[j];
            potencia.push(currentSubset.concat(currentElement));
        }
    }

    return potencia;
}

function mostrarConjuntoPotencia(conjuntoPotencia) {
    var contenedorConjuntos = document.getElementById('contenedorConjuntos');
    var numSubconjuntos = conjuntoPotencia.length;

    contenedorConjuntos.innerHTML = '<p>Número de Subconjuntos: <strong></strong>' + numSubconjuntos + '</strong></p>';

    for (var i = 0; i < conjuntoPotencia.length; i++) {
        var conjuntoDiv = document.createElement('div');
        conjuntoDiv.innerHTML = '<p>' + formatConjunto(conjuntoPotencia[i]) + '</p>';
        contenedorConjuntos.appendChild(conjuntoDiv);
    }

    // Mostrar la sección de resultados
    mostrarResultados();
}


function mostrarResultados() {
    var resultadoConjunto = document.getElementById('resultadoConjuntos');
    resultadoConjunto.style.display = 'block';

    var menu = document.getElementById('menu');
    menu.style.zIndex = '2';
}

// Función para formatear un conjunto en el formato {1,2,3,...}
function formatConjunto(conjunto) {
    return '{' + conjunto.join(',') + '}';
}

// Event listener para el botón de calcular
document.querySelector('.btn-calcular').addEventListener('click', function() {
    console.log("Botón de calcular clickeado");
    calcularConjuntoPotencia();
});
//-------------------------------------------
// Seccion del diseño de la pagina
document.addEventListener("click", function (event) {
    var menu = document.getElementById("menu");
    var body = document.body;

    if (!menu.contains(event.target) && !document.querySelector(".nav_target").contains(event.target)) {
        location.hash = ""; // Limpia el fragmento de la URL para ocultar el menú
        body.classList.remove("menu-open"); // Remueve la clase 'menu-open' al cerrar el menú
    } else {
        body.classList.add("menu-open"); // Agrega la clase 'menu-open' al abrir el menú
    }
});
