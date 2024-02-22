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
document.getElementById('btn-eliminar').addEventListener('click', eliminarCampo);


function crearCampos() {
    var numConjuntos = document.getElementById('numConjuntos').value;
    var contenedor = document.getElementById('contenedorConjuntos');

    contenedor.innerHTML = '';

    for (var i = 0; i < numConjuntos; i++) {
        const label = document.createElement('label');
        label.textContent = 'Conjunto ' + (i + 1) + ': ';

        var input = document.createElement('input');
        input.type = 'text';
        input.name = 'conjunto' + (i + 1);

        contenedor.appendChild(label);
        contenedor.appendChild(input);
        contenedor.appendChild(document.createElement('br'));
    }
}

function mostrarResultados() {
    var resultadoConjuntos = document.getElementById('resultadoConjuntos');
    resultadoConjuntos.style.display = 'block';
}

function calcularProductoCartesiano(conjuntos, index, cartesianoParcial, productoCartesiano) {
    if (index === conjuntos.length) {
        productoCartesiano.push(cartesianoParcial.slice()); 
        return;
    }

    for (var i = 0; i < conjuntos[index].length; i++) {
        cartesianoParcial.push(conjuntos[index][i]); 
        calcularProductoCartesiano(conjuntos, index + 1, cartesianoParcial, productoCartesiano); 
        cartesianoParcial.pop();
    }
}

function procesarConjuntos() {
    var contenedor = document.getElementById('contenedorConjuntos');
    var resultadoConjuntos = document.getElementById('resultadoConjuntos');

    var conjuntos = [];
    for (var i = 0; i < contenedor.children.length; i += 3) {
        var conjunto = contenedor.children[i + 1].value.split(',').map(function (x) {
            return x.trim();
        });
        conjuntos.push(conjunto);
    }

    var productoCartesiano = [];
    calcularProductoCartesiano(conjuntos, 0, [], productoCartesiano); 

    resultadoConjuntos.innerHTML = 'Resultado del Producto Cartesiano (' + productoCartesiano.length + ' tuplas):<br>';
    for (var i = 0; i < productoCartesiano.length; i++) {
        resultadoConjuntos.innerHTML += '(' + productoCartesiano[i].join(', ') + ')<br>';
    }

    mostrarResultados();
}

function limpiarContenido() {
    var contenedor = document.getElementById('contenedorConjuntos');
    var resultadoConjuntos = document.getElementById('resultadoConjuntos');

    contenedor.innerHTML = '';
    resultadoConjuntos.innerHTML = '';
    resultadoConjuntos.style.display = 'none'; // Oculta la sección de resultados

}

