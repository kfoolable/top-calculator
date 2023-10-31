const calContainer = document.querySelector("div.calculator-container");
const display = calContainer.querySelector(".display");
const btnCon = document.querySelector("div.buttons");

const btnNumbers = btnCon.querySelectorAll("button.dsp");
const btnOperators = btnCon.querySelectorAll("button.op");

const btnEquals = btnCon.querySelector(".equals");

const btnDel = btnCon.querySelector(".delete");
const btnClear = btnCon.querySelector(".clear");

let firstInput = "";
let operator = null;
let secondInput = "";

let result = "";

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
    firstInput += button.textContent;
    display.textContent = firstInput;
  });
});

btnOperators.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.textContent;
  });
});

btnNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator !== null) {
      secondInput += button.textContent;
      display.textContent = secondInput;
    }
  });
});

btnEquals.addEventListener("click", () => {
  operate(operator, firstInput, secondInput);
});
