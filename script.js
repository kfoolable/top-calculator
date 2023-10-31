//display
const display = document.querySelector("div.display");

//delete and clear
const del = document.querySelector("button.delete");
const clear = document.querySelector("button.clear");

const btnContainer = document.querySelector("div.buttons");
const btnValues = document.querySelectorAll("button.dsp");

function clearDisplay() {
  display.textContent = "";
}

clear.addEventListener("click", () => {
  clearDisplay();
});

btnValues.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
  });
});
