// Función para calcular los grados de cerveza
function calcularGrados(densInicial, densFinal) {
    if (typeof densInicial !== 'number' || typeof densFinal !== 'number' || densInicial <= 0 || densFinal <= 0 || densInicial <= densFinal) {
      return -1; // Error en los datos
    }
  
    const grados = (densInicial - densFinal) * 0.132;
    return parseFloat(grados.toFixed(2));
  }
  
  // Función para añadir un mensaje al formulario
  function anadirMensaje(mensaje, tipo) {
    const aviso = document.getElementById("aviso");
    aviso.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensaje}</div>`;
  }
  
  // Función para manejar el evento de clic en el botón "Calcular"
  function botonCalcularPulsado() {
    const densInicial = parseFloat(document.getElementById("densInicial").value);
    const densFinal = parseFloat(document.getElementById("densFinal").value);
  
    const grados = calcularGrados(densInicial, densFinal);
  
    if (grados === -1) {
      anadirMensaje("Datos erróneos", "danger");
    } else {
      anadirMensaje(`Su cerveza tendrá ${grados} grados`, "success");
    }
  }
  
  // Función para manejar el evento de clic en el botón "Limpiar datos"
  function botonLimpiarPulsado() {
    const densInicial = document.getElementById("densInicial");
    const densFinal = document.getElementById("densFinal");
    const aviso = document.getElementById("aviso");
  
    densInicial.value = "";
    densFinal.value = "";
    aviso.innerHTML = "";
  }
  
  // Asignar el evento de clic al botón "Calcular"
  document.getElementById("btnCalcular").addEventListener("mouseup", botonCalcularPulsado);
  
  // Asignar el evento de clic al botón "Limpiar datos"
  document.getElementById("btnLimpiar").addEventListener("click", botonLimpiarPulsado);
  