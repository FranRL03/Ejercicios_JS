// Función para añadir una nueva fila en la tabla
function agregarFila() {
  // Comprobar si ya hay una fila pendiente de validar
  var filaPendiente = document.querySelector('.fila-pendiente');
  if (filaPendiente) {
    alert('Debe validar la fila actual antes de añadir una nueva.');
    return;
  }

  // Crear una nueva fila
  var tabla = document.getElementById('tabla');
  var nuevaFila = tabla.insertRow(tabla.rows.length);

  // Añadir celdas a la nueva fila
  var celdaBocadillo = nuevaFila.insertCell(0);
  var celdaPrecio = nuevaFila.insertCell(1);
  var celdaBoton = nuevaFila.insertCell(2);

  // Añadir campos de formulario a las celdas
  celdaBocadillo.innerHTML = '<input type="text" class="form-control">'; 
  celdaPrecio.innerHTML = '<input type="number" step="0.01" class="form-control">';
  celdaBoton.innerHTML = '<div class="btn btn-info validar-fila" onclick="validarFila(this)">Validar Fila</div>';

  // Agregar la clase "fila-pendiente" a la nueva fila
  nuevaFila.classList.add('fila-pendiente');
}

// Función para validar una fila
function validarFila(boton) {
  // Obtener la fila actual
  var fila = boton.parentNode.parentNode;

  // Obtener los valores de los campos de formulario
  var bocadilloInput = fila.cells[0].querySelector('input');
  var precioInput = fila.cells[1].querySelector('input');
  var bocadillo = bocadilloInput.value.trim();
  var precio = precioInput.value.trim();

  // Validar los valores de los campos
  if (bocadillo === '' || precio === '') {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Realizar las acciones correspondientes para validar la fila
  // Aquí debes agregar el código que necesites para validar la fila y realizar las acciones correspondientes

  // Deshabilitar los campos de formulario
  bocadilloInput.disabled = true;
  precioInput.disabled = true;

  // Eliminar el botón "Validar Fila"
  fila.cells[2].innerHTML = '';

  // Quitar la clase "fila-pendiente" de la fila
  fila.classList.remove('fila-pendiente');
}

// Agregar el evento de escucha al cargar el documento
document.addEventListener('DOMContentLoaded', function() {
  var anadirFilaBtn = document.getElementById('anadirFila');
  var validarBtn = document.getElementById('validar');

  // Agregar el evento de clic al botón "Añadir Fila"
  anadirFilaBtn.addEventListener('click', function() {
    agregarFila();
  });

  // Agregar el evento de clic al botón "Validar Nuevas Filas"
  validarBtn.addEventListener('click', function() {
    var filasPendientes = document.getElementsByClassName('fila-pendiente');
    for (var i = 0; i < filasPendientes.length; i++) {
      var boton = filasPendientes[i].querySelector('.validar-fila');
      validarFila(boton);
    }
  });

  // Llamada inicial para agregar la primera fila
  agregarFila();
});

