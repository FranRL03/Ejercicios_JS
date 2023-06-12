// Variables globales
let turno = "X";
const casillas = document.querySelectorAll(".btn");
const mensaje = document.getElementById("mensaje");
const limpiarBtn = document.getElementById("limpiar");

// Función para cambiar el turno y el mensaje
function cambiarTurno() {
  turno = turno === "X" ? "O" : "X";
  mensaje.textContent = `Es el turno de ${turno}`;
  mensaje.classList.toggle("btn-success");
  mensaje.classList.toggle("btn-danger");
}

// Función para manejar el evento de hacer clic en una casilla
function handleClick(event) {
  const casilla = event.target;
  if (!casilla.textContent) {
    casilla.classList.toggle("btn-danger");
    casilla.classList.toggle("btn-success");
    casilla.textContent = turno;
    cambiarTurno();
  } else {
    mensaje.textContent = "Casilla ocupada";
  }
}

// Función para limpiar el tablero y reiniciar el turno
function limpiarTablero() {
  casillas.forEach((casilla) => {
    casilla.classList.remove("btn-danger", "btn-success");
    casilla.textContent = "";
  });
  turno = "X";
  mensaje.textContent = "Es el turno de X";
  mensaje.classList.remove("btn-danger");
  mensaje.classList.add("btn-success");
}

// Asignar el evento de clic a las casillas
casillas.forEach((casilla) => {
  casilla.addEventListener("click", handleClick);
});

// Asignar el evento de clic al botón de limpiar tablero
limpiarBtn.addEventListener("click", limpiarTablero);
