const calContainer = document.querySelector("div.calculator-container");
const display = calContainer.querySelector(".display");
const btnCon = document.querySelector("div.buttons");

const btnNumbers = btnCon.querySelectorAll("button.dsp");
const btnOperators = btnCon.querySelectorAll("button.op");
const btnDot = btnCon.querySelector("button.dot");

const btnEquals = btnCon.querySelector(".equals");

const btnDel = btnCon.querySelector(".delete");
const btnClear = btnCon.querySelector(".clear");

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

function operate(op, a, b) {
  a = Number(a);
  b = Number(b);

  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return "Error: Invalid operator";
  }
}

// Expected output flow: [1, '+', 1, 2, ,'-', 1.9, 0.1]

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;

let operationStorage = "";

let isResetScreen = false;

btnEquals.addEventListener("click", handleEvaluate);
btnDot.addEventListener("click", displayDot);
btnDel.addEventListener("click", handleDelete);
btnClear.addEventListener("click", handleClear);

btnNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    displayNumbers(button.textContent);
  });
});

btnOperators.forEach((button) => {
  button.addEventListener("click", () => {
    handleOperation(button.textContent);
  });
});

function displayNumbers(number) {
  if (display.textContent === "0" || isResetScreen) resetScreen();
  display.textContent += number;
}

function resetScreen() {
  display.textContent = "";
  isResetScreen = false;
}

function displayDot() {
  if (display.textContent === "") display.textContent = "0";
  if (display.textContent.includes(".")) return;
  display.textContent += ".";
}

function handleOperation(operator) {
  if (currentOperation !== null) handleEvaluate();
  firstOperand = display.textContent;
  currentOperation = operator;

  operationStorage = `${firstOperand} ${currentOperation}`;
  //console.log(operationStorage);

  isResetScreen = true;
}

function handleEvaluate() {
  if (currentOperation === null || isResetScreen) return;
  secondOperand = display.textContent;
  display.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );

  currentOperation = null;
  //console.log("second operand " + secondOperand);
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function handleDelete() {
  display.textContent = display.textContent.toString().slice(0, -1);
}

function handleClear() {
  display.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}
