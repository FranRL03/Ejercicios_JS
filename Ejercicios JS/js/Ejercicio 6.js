document.addEventListener('DOMContentLoaded', function() {
    // Variable para almacenar el total de la cuenta
    let total = 0;
  
    // Función para mostrar la fila correspondiente al producto seleccionado
    function showProductRow(producto) {
      const fila = document.getElementById(`fila${producto}`);
      fila.style.display = 'table-row';
    }
  
    // Función para actualizar las celdas de cantidad y precio acumulado de un producto
    function updateProductData(producto) {
      const cantidadCell = document.getElementById(`fila${producto}`).cells[1];
      const precioCell = document.getElementById(`fila${producto}`).cells[2];
  
      let cantidad = parseInt(cantidadCell.textContent) + 1;
      let precio = cantidad * calcularPrecio(producto); // Llamamos a la función calcularPrecio(producto) para obtener el precio del producto
  
      cantidadCell.textContent = cantidad;
      precioCell.textContent = `${precio} €`;
    }
  
    // Función para actualizar el total de la cuenta
    function updateTotal() {
        let newTotal = 0;
      
        // Iterar sobre todas las filas de productos
        const filasProductos = document.querySelectorAll('tbody tr');
        for (let i = 0; i < filasProductos.length; i++) {
          const fila = filasProductos[i];
          const cantidad = parseInt(fila.cells[1].textContent);
          const precioText = fila.cells[2].textContent;
          const precio = parseFloat(precioText) || 0; // Convertir a número o usar 0 si no es un número válido
          newTotal += cantidad * precio;
        }
      
        // Verificar si el nuevo total es un número válido
        if (isNaN(newTotal) || !isFinite(newTotal)) {
          newTotal = 0;
        }
      
        // Actualizar el total en la tabla
        const totalCell = document.getElementById('total');
        totalCell.textContent = `${newTotal.toFixed(2)} €`;
      
        // Mostrar la fila de total si es la primera vez que se pulsa un botón
        if (total === 0) {
          const filaTotal = document.querySelector('tbody tr:last-child');
          filaTotal.style.display = 'table-row';
        }
      
        total = newTotal;
      }
      
      
    // Función para calcular el precio de cada producto
    function calcularPrecio(producto) {
      switch (producto) {
        case 'jarra':
          return 5;
        case 'cerveza':
          return 2;
        case 'manzanilla':
          return 4;
        case 'cocacola':
          return 2;
        case 'fantanaranja':
          return 2;
        case 'fantalimon':
          return 2;
      }
    }
  
    // Agregar eventos a los botones de producto
    const buttons = document.querySelectorAll('.btn');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        const producto = this.id;
        showProductRow(producto);
        updateProductData(producto);
        updateTotal();
      });
    }
  });
  