const boton = document.getElementById("btnGenerar");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".colorNumber");

console.log(btnGenerar, body);

const generarColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    return rgbColor;
}

const setBackground = () => {
    const newColor = generarColor();

    colorNumber.innerHTML = newColor;

    body.style.backgroundColor = newColor;
}

btnGenerar.addEventListener("click", setBackground);



const botonCont = document.querySelector("#btnGenerar");
let contador = 0;
let contadorElemento = document.querySelector("#contador");

const coloresGenerados = () => {
    contador++;
    return contador;
}

function actualizarContador() {
    let cont = coloresGenerados();
    contadorElemento.innerHTML = cont;
}

botonCont.addEventListener("click", actualizarContador);


const botonLimpiar = document.getElementById("btnLimpiar");

function limpiar() {
    document.body.style.backgroundColor = "white";
  }

botonLimpiar.addEventListener("click", limpiar);