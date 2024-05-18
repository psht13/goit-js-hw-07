const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

const boxContainer = document.querySelector("#boxes");
const input = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBox(width, height) {
  const color = getRandomHexColor();
  return `<div style="width: ${width}px; height: ${height}px; background-color: ${color};"></div>`;
  //створюю шаблонний рядок з розміткою
}

function addBoxes(n) {
  if (n > 100 || n < 0) {
    alert("That's too much...");
    return;
    //перевірка на правильний ввід
  }

  let initialWidth = 30;
  let initialHeight = 30;
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(createBox(initialWidth, initialHeight));
    initialWidth += 10;
    initialHeight += 10;
  }

  boxContainer.innerHTML = result.join("\n"); //додавання нової розмітки
}

function destroyBoxes() {
  boxContainer.innerHTML = ""; //очищення розмітки
}

btnCreate.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  addBoxes(amount);
});

btnDestroy.addEventListener("click", () => destroyBoxes());
