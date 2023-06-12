// Función para añadir una nueva fila en la tabla
function agregarFila() {
    var filaPendiente = document.querySelector('#anadirFila');
    
    // Comprobar si ya hay una fila pendiente de validar
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
    nuevaFila.classList.add('anadirFila');
  }
  
  // Función para validar una fila
  function validarFila(boton) {
    var fila = boton.parentNode.parentNode;
    var inputBocadillo = fila.cells[0].querySelector('input');
    var inputPrecio = fila.cells[1].querySelector('input');
    
    // Obtener los valores de los campos de formulario
    var bocadillo = inputBocadillo.value.trim();
    var precio = inputPrecio.value.trim();
    
    // Comprobar si se completaron todos los campos
    if (bocadillo === '' || precio === '') {
      mostrarMensaje('Por favor, complete todos los campos.', 'alert-danger');
      return;
    }
    
    // Comprobar el formato del precio
    if (!/^(\d+(\.\d{1,2})?)$/.test(precio)) {
      mostrarMensaje('El precio debe ser un número con hasta dos decimales.', 'alert-danger');
      return;
    }
    
    // Eliminar la clase "fila-pendiente" de la fila
    fila.classList.remove('anadirFila');
    
    // Deshabilitar los campos de formulario
    inputBocadillo.disabled = true;
    inputPrecio.disabled = true;
    
    // Eliminar el botón "Validar Fila"
    fila.cells[2].innerHTML = '';
    
    // Mostrar los datos validados en la fila de la tabla
    fila.cells[0].textContent = bocadillo;
    fila.cells[1].textContent = precio + '€';
    
    // Mostrar mensaje de éxito
    mostrarMensaje('Fila validada y añadida correctamente.', 'alert-success');
  }
  
  // Función para mostrar un mensaje en el div de aviso
  function mostrarMensaje(mensaje, clase) {
    var avisoDiv = document.getElementById('aviso');
    
    // Crear el elemento de mensaje con la clase especificada
    var mensajeElemento = document.createElement('div');
    mensajeElemento.textContent = mensaje;
    mensajeElemento.classList.add('alert', clase);
    
    // Eliminar cualquier mensaje anterior
    avisoDiv.innerHTML = '';
    
    // Añadir el mensaje al div
    avisoDiv.appendChild(mensajeElemento);
}

filaPendiente.addEventListener("click", agregarFila);