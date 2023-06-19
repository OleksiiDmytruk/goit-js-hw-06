function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const changeColorBtnEl = document.querySelector(".change-color");
const colorSpanEl = document.querySelector(".color");
changeColorBtnEl.addEventListener("click", changeColorSpan);

function changeColorSpan() {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorSpanEl.textContent = color;
}
