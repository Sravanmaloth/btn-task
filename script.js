let number = 0;
let history = [];
let redoStack = [];

const numberSpan = document.getElementById("number");
const progress = document.getElementById("progress");
const subtractBtn = document.getElementById("subtractBtn");
const addBtn = document.getElementById("addBtn");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");
const inputValue = document.getElementById("inputValue");

function updateUI() {
  numberSpan.textContent = number;
  progress.style.width = (number / 150) * 100 + "%";
}
function addToHistory(value) {
  history.push(value);
  redoStack = [];
}
subtractBtn.addEventListener("click", () => {
  let value = parseInt(inputValue.value);
  if (number - value >= 0) {
    addToHistory(number);
    number -= value;
    updateUI();
  }
});

addBtn.addEventListener("click", () => {
  let value = parseInt(inputValue.value);
  if (number + value <= 150) {
    addToHistory(number);
    number += value;
    updateUI();
  }
});
undoBtn.addEventListener("click", () => {
  if (history.length > 0) {
    redoStack.push(number);
    number = history.pop();
    updateUI();
  }
});
redoBtn.addEventListener("click", () => {
  if (redoStack.length > 0) {
    history.push(number);
    number = redoStack.pop();
    updateUI();
  }
});
updateUI();
