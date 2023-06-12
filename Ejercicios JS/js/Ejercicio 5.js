document.addEventListener('DOMContentLoaded', function() {
    // Variables para almacenar los operandos y el operador actual
    let operand1 = 0;
    let operand2 = 0;
    let operator = '';
  
    // Función para mostrar el mensaje en pantalla
    function displayMessage(message) {
      const pantalla = document.getElementById('pantalla');
      pantalla.textContent = message;
    }
  
    // Función para manejar los números y operadores
    function handleInput(input) {
      // Si es un número, actualizamos el operando correspondiente
      if (!isNaN(input)) {
        if (operator === '') {
          operand1 = parseInt(input);
        } else {
          operand2 = parseInt(input);
        }
      }
      // Si es un operador (+ o -), actualizamos el operador actual
      else if (input === '+' || input === '-') {
        operator = input;
      }
      // Si es igual (=), realizamos la operación y mostramos el resultado
      else if (input === '=') {
        let result = 0;
        if (operator === '+') {
          result = operand1 + operand2;
        } else if (operator === '-') {
          result = operand1 - operand2;
        }
        displayMessage(result.toString());
  
        // Reiniciamos la calculadora
        operand1 = 0;
        operand2 = 0;
        operator = '';
        return;
      }
  
      // Actualizamos el mensaje en pantalla
      displayMessage(operand1.toString() + operator + operand2.toString());
    }
  
    // Agregar eventos a los botones
    const buttons = document.querySelectorAll('.badge');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        handleInput(this.textContent);
      });
    }
  });



