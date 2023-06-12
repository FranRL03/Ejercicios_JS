// document.addEventListener('DOMContentLoaded', function() {
//     // Variables para almacenar los operandos y el operador actual
//     let operand1 = 0;
//     let operand2 = 0;
//     let operator = '';
  
//     // Función para mostrar el mensaje en pantalla
//     function displayMessage(message) {
//       const pantalla = document.getElementById('pantalla');
//       pantalla.textContent = message;
//     }
  
//     // Función para manejar los números y operadores
//     function handleInput(input) {
//       // Si es un número, actualizamos el operando correspondiente
//       if (!isNaN(input)) {
//         if (operator === '') {
//           operand1 = parseInt(input);
//         } else {
//           operand2 = parseInt(input);
//         }
//       }
//       // Si es un operador (+ o -), actualizamos el operador actual
//       else if (input === '+' || input === '-') {
//         operator = input;
//       }
//       // Si es igual (=), realizamos la operación y mostramos el resultado
//       else if (input === '=') {
//         let result = 0;
//         if (operator === '+') {
//           result = operand1 + operand2;
//         } else if (operator === '-') {
//           result = operand1 - operand2;
//         }
//         displayMessage(result.toString());
  
//         // Reiniciamos la calculadora
//         operand1 = 0;
//         operand2 = 0;
//         operator = '';
//         return;
//       }
  
//       // Actualizamos el mensaje en pantalla
//       displayMessage(operand1.toString() + operator + operand2.toString());
//     }
  
//     // Agregar eventos a los botones
//     const buttons = document.querySelectorAll('.badge');
//     for (let i = 0; i < buttons.length; i++) {
//       buttons[i].addEventListener('click', function() {
//         handleInput(this.textContent);
//       });
//     }
//   });

document.addEventListener('DOMContentLoaded', function() {
  // Variable para almacenar la expresión actual
  let expression = '';

  // Función para mostrar la expresión en pantalla
  function displayExpression() {
    const pantalla = document.getElementById('pantalla');
    pantalla.textContent = expression;
  }

  // Función para evaluar una expresión matemática
  function evaluateExpression() {
    let result = 0;
    const parts = expression.split(/([+-])/); // Dividir la expresión en números y operadores

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      if (part === '+' || part === '-') {
        // Si es un operador, almacenarlo para la siguiente iteración
        operator = part;
      } else {
        // Si es un número, realizar la operación correspondiente
        const number = parseInt(part);

        if (i === 0) {
          result = number;
        } else {
          if (operator === '+') {
            result += number;
          } else if (operator === '-') {
            result -= number;
          }
        }
      }
    }

    return result;
  }

  // Función para manejar los números y operadores
  function handleInput(input) {
    // Si es un número, lo agregamos a la expresión actual
    if (!isNaN(input)) {
      expression += input;
    }
    // Si es un operador (+ o -), lo agregamos a la expresión actual
    else if (input === '+' || input === '-') {
      expression += input;
    }
    // Si es igual (=), realizamos la operación y mostramos el resultado
    else if (input === '=') {
      let result = evaluateExpression();
      displayExpression(result.toString());

      // Reiniciamos la expresión después de mostrar el resultado
      expression = result.toString();
      return;
    }

       // Si es el botón de borrado, limpiamos la expresión
       else if (input === 'C') {
        expression = '';
      }
  

    // Actualizamos la expresión en pantalla
    displayExpression();
  }

  // Agregar eventos a los botones
  const buttons = document.querySelectorAll('.badge');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      handleInput(this.textContent);
    });
  }
});




