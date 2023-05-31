const boton = document.getElementById("btnGenerar");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".colorNumber");
// const colorAviso = document.querySelector("#aviso");
console.log(btnGenerar, body);

const generarColor = () => {
    const r = Math.floor(Math.random() * (256-0)+0);
    const g = Math.floor(Math.random() * (256-0)+0);
    const b = Math.floor(Math.random() * (256-0)+0);
    
    const rgbColor = 'rgb(${r}, ${g}, ${b})';
    return rgbColor;
}

const setBackground = () => {
    const newColor = generarColor();

    colorNumber.innerHTML = newColor;

    body.style.backgroundColor = newColor;
}

btnGenerar.addEvenListener("click", setBackground);
