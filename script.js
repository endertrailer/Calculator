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


  function operation(){
    if (operatorCheck === '+') {
    display.textContent = String(add(firstNumber, secondNumber));
  } else if (operatorCheck === '-') {
    display.textContent = String(subtract(firstNumber, secondNumber));
  } else if (operatorCheck === '*') {
    display.textContent = String(multiply(firstNumber, secondNumber));
  } else if (operatorCheck === '/') {
    display.textContent = String(divide(firstNumber, secondNumber));
  }
}
 
    // logic here

  let firstNumber;
  let secondNumber;
  let thirdNumber;
  var numberCheck = 0;
  let operatorCheck = '';
  let operatorNumber = 0;
  let answerCheck;
  
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
        
          operation();
          numberCheck = 0;
          operatorNumber = 1;
          thirdNumber = parseInt(display.textContent);
      }
      
    });
  });
  
  answer.addEventListener('click', () => {
    if (numberCheck === 2) {
      operation();
      numberCheck = 0;
      answerCheck = 1;
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
     operatorNumber = 0;
     display.textContent = '';
  })
  backSpace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
    if( answerCheck !== 1){
      secondNumber = parseInt(display.textContent);
      firstNumber;
      
    }
    thirdNumber;
    numberCheck = 2;
    operatorNumber = 0;
    if(answerCheck === 1){
      firstNumber = parseInt(display.textContent);
      secondNumber;
      answerCheck = 0;
      numberCheck = 0;
    }
  });