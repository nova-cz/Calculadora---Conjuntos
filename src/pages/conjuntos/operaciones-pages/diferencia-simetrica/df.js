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

document.getElementById('btn-agregar').addEventListener('click', agregarCampo);

function eliminarCampo() {
    var contenedor = document.getElementById('contenedorConjuntos');

    if (contenedor.children.length > 2) {
        contenedor.removeChild(contenedor.lastElementChild);
        contenedor.removeChild(contenedor.lastElementChild);
        contenedor.removeChild(contenedor.lastElementChild);
    }
}

document.getElementById('btn-eliminar').addEventListener('click', eliminarCampo);

function limpiarContenido() {
    var contenedor = document.getElementById('contenedorConjuntos');
    var resultadoConjunto = document.getElementById('resultadoConjunto');

    contenedor.innerHTML = '';

    resultadoConjunto.innerHTML = '';
    resultadoConjunto.style.display = 'none';

    var menu = document.getElementById('menu');
    menu.style.zIndex = '1';
}

// Asociar la función eliminarCampo al evento click del botón -
document.getElementById('btn-eliminar').addEventListener('click', eliminarCampo);

// Función para crear campos según el número de conjuntos ingresado
function crearCampos() {
    var numConjuntos = document.getElementById('numConjuntos').value;
    var contenedor = document.getElementById('contenedorConjuntos');

    contenedor.innerHTML = '';

    for (var i = 0; i < numConjuntos; i++) {
        const label = document.createElement('label');
        label.innerHTML = 'Conjunto ' + (i + 1) + ': ';

        var input = document.createElement('input');
        input.type = 'text';
        input.name = 'conjunto' + (i + 1);

        contenedor.appendChild(label);
        contenedor.appendChild(input);
        contenedor.appendChild(document.createElement('br'));
    }
}

function obtenerDiferenciaSimetrica(conjunto1, conjunto2) {
    var diferencia1 = conjunto1.filter(function (element) {
        return !conjunto2.includes(element);
    });

    var diferencia2 = conjunto2.filter(function (element) {
        return !conjunto1.includes(element);
    });

    var diferenciaSimetrica = diferencia1.concat(diferencia2);

    return diferenciaSimetrica;
}

function procesarConjuntos() {
    var numConjuntos = document.getElementById('numConjuntos').value;
    var conjuntos = [];

    for (var i = 0; i < numConjuntos; i++) {
        var inputName = 'conjunto' + (i + 1);
        var inputValue = document.getElementsByName(inputName)[0].value;

        var conjuntoArray = inputValue.split(',');

        conjuntoArray = conjuntoArray.map(function (element) {
            return element.trim();
        });

        conjuntos.push(conjuntoArray);
    }

    var diferenciaSimetrica = conjuntos.reduce(function (acc, conjunto) {
        return obtenerDiferenciaSimetrica(acc, conjunto);
    });

    var resultadoConjunto = document.getElementById('resultadoConjunto');
    resultadoConjunto.innerHTML = '<p>Diferencia Simétrica de los Conjuntos:</p>' + formatConjunto(diferenciaSimetrica);

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
