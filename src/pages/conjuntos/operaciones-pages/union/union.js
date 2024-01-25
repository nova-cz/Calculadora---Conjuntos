function agregarCampo() {
    var contenedor = document.getElementById('contenedorConjuntos');

    const label = document.createElement('label');
    label.innerHTML = 'Conjunto ' + (contenedor.children.length / 3 + 1) + ': ';

    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'conjunto' + (contenedor.children.length / 3 + 1);

    contenedor.appendChild(label);
    contenedor.appendChild(input);
    contenedor.appendChild(document.createElement('br'));
}

// Asociar la función agregarCampo al evento click del botón +
document.getElementById('btn-agregar').addEventListener('click', agregarCampo);


function eliminarCampo() {
    var contenedor = document.getElementById('contenedorConjuntos');

    if (contenedor.children.length > 2) {
        // Verificar que haya al menos un conjunto para eliminar
        // Eliminar el último conjunto y sus elementos (input y label)
        contenedor.removeChild(contenedor.lastElementChild); // Eliminar el salto de línea
        contenedor.removeChild(contenedor.lastElementChild); // Eliminar el input
        contenedor.removeChild(contenedor.lastElementChild); // Eliminar la etiqueta <label>
    }
}

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

// Asociar la función eliminarCampo al evento click del botón -
document.getElementById('btn-eliminar').addEventListener('click', eliminarCampo);

// Función para crear campos según el número de conjuntos ingresado
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

    // Concatenar los conjuntos en un solo arreglo
    var conjuntoFinal = [].concat(...conjuntos);

    // Eliminar duplicados conservando el orden original
    conjuntoFinal = conjuntoFinal.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });

    // Mostrar el resultado en el documento
    var resultadoConjunto = document.getElementById('resultadoConjunto');
    resultadoConjunto.innerHTML = '<p>Conjunto obtenido:</p>' + formatConjunto(conjuntoFinal);

    // Mostrar la sección de resultados
    mostrarResultados();
}



function mostrarResultados() {
    var resultadoConjunto = document.getElementById('resultadoConjunto');
    resultadoConjunto.style.display = 'block';

    var menu = document.getElementById('menu');
    menu.style.zIndex = '2';  // Asigna un z-index mayor al menú cuando se muestra el resultado

}

// Función para formatear un conjunto en el formato {1,2,3,...}
function formatConjunto(conjunto) {
    return '{' + conjunto.join(',') + '}';
}






//-------------------------------------------
//Seccion del diseñño de la pagina
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
