const calContainer = document.querySelector("div.calculator-container");
const display = calContainer.querySelector(".display");
const btnCon = document.querySelector("div.buttons");

const btnNumbers = btnCon.querySelectorAll("button.dsp");
const btnOperators = btnCon.querySelectorAll("button.op");
const btnDot = btnCon.querySelector("button.dot");

const btnEquals = btnCon.querySelector(".equals");

const btnDel = btnCon.querySelector(".delete");
const btnClear = btnCon.querySelector(".clear");

let firstInput = "";
let operator = null;
let secondInput = "";

let result = "";

let isFirstInput = true;
let isSecondInput = false;

let myArray = [];

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(op, first, second) {
  first = parseFloat(first);
  second = parseFloat(second);

  switch (op) {
    case "+":
      return add(first, second);
    case "-":
      return subtract(first, second);
    case "*":
      return multiply(first, second);
    case "/":
      return divide(first, second);
  }
}

btnNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === null) {
      firstInput += button.textContent;
      display.textContent = firstInput;
    } else {
      secondInput += button.textContent;
      display.textContent = secondInput;
    }
  });
});

btnOperators.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstInput !== "") {
      if (operator && secondInput !== "") {
        // If there's already an operator and second input, calculate and reset
        const calculated = operate(operator, firstInput, secondInput);
        myArray.push(calculated);
        firstInput = String(calculated);
        secondInput = "";
        //console.log(calculated);
        display.textContent = calculated;
      }
      operator = button.textContent;
      //display.textContent = secondInput;
    }
  });
});

btnDot.addEventListener("click", () => {
  if (isFirstInput) {
    if (!firstInput.includes(".")) {
      firstInput += ".";
      display.textContent = firstInput;
    }
  } else if (isSecondInput) {
    if (!secondInput.includes(".")) {
      secondInput += ".";
      display.textContent = secondInput;
    }
  }
});

btnEquals.addEventListener("click", () => {
  if (firstInput !== "" && operator !== null && secondInput !== "") {
    const calculated = operate(operator, firstInput, secondInput);
    myArray.push(calculated);
    result = calculated;
    display.textContent = result;
    firstInput = String(result);
    secondInput = "";
    operator = null;
  }
});

// btnNumbers.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (isFirstInput) {
//       firstInput += button.textContent;
//       display.textContent = firstInput;
//     } else {
//       secondInput += button.textContent;
//       display.textContent = secondInput;
//     }
//   });
// });

// btnOperators.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (firstInput !== "") {
//       operator = button.textContent;
//       isFirstInput = false;
//     }
//   });
// });

// btnEquals.addEventListener("click", () => {
//   display.textContent = operate(operator, firstInput, secondInput);
// });
