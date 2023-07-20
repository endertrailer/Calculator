function add(num1, num2) {
    return num1 + num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    return num1 / num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  let firstNumber;
  let secondNumber;
  let thirdNumber;
  var numberCheck = 0;
  let operatorCheck = '';
  let displayNumber = 0;
  let operatorNumber = 0;
  
  const display = document.querySelector('.display');
  const numbers = document.querySelectorAll('.numbers');
  const operators = document.querySelectorAll('.operators');
  const answer = document.querySelector('.equalbtn');
  const clear = document.querySelector('.resetbtn');
  const backSpace = document.querySelector('.backspacebtn');
  
  operators.forEach(operator => {
    operator.addEventListener('click', () => {
      if (numberCheck === 0) {
        numberCheck = 1;
        firstNumber = parseInt(display.textContent);
        operatorCheck = operator.textContent;
        
      } else if (['+', '*', '-', '/'].includes(operator.textContent)) {
        operatorCheck = operator.textContent;
      }
      if(numberCheck === 2){
        
          if (operatorCheck === '+') {
            display.textContent = String(add(firstNumber, secondNumber));
          } else if (operatorCheck === '-') {
            display.textContent = String(subtract(firstNumber, secondNumber));
          } else if (operatorCheck === '*') {
            display.textContent = String(multiply(firstNumber, secondNumber));
          } else if (operatorCheck === '/') {
            display.textContent = String(divide(firstNumber, secondNumber));
          }
          numberCheck = 0;
          operatorNumber = 1;
          thirdNumber = parseInt(display.textContent);
      }
      
    });
  });
  
  answer.addEventListener('click', () => {
    if (numberCheck === 2) {
      if (operatorCheck === '+') {
        display.textContent = String(add(firstNumber, secondNumber));
      } else if (operatorCheck === '-') {
        display.textContent = String(subtract(firstNumber, secondNumber));
      } else if (operatorCheck === '*') {
        display.textContent = String(multiply(firstNumber, secondNumber));
      } else if (operatorCheck === '/') {
        display.textContent = String(divide(firstNumber, secondNumber));
      }
      numberCheck = 0;
    }
    
  });
  
  numbers.forEach(number => {
    number.addEventListener('click', () => {
      if (numberCheck === 1) {
        display.textContent = '';
      }
      if (numberCheck >= 1) {
        numberCheck = 2;
        display.textContent += number.textContent;
        secondNumber = parseInt(display.textContent);
      } else if (display.textContent.length < 17) {
        display.textContent += number.textContent;
      }
      if(operatorNumber === 1){
        firstNumber = thirdNumber;
        numberCheck = 2;
        operatorNumber = 0;
        display.textContent = number.textContent;
      }
  
    });
  });
  
  clear.addEventListener('click', () => {
     firstNumber;
     secondNumber;
     thirdNumber;
     numberCheck = 0;
     operatorCheck = '';
     displayNumber = 0;
     operatorNumber = 0;
     display.textContent = '';
  })
  backSpace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
    firstNumber = display.textContent.slice(0, -1);
    secondNumber;
    thirdNumber;
    numberCheck = 0;
    operatorCheck = '';
    displayNumber = 0;
    operatorNumber = 0;
  })