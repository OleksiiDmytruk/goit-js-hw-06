const inputRangeEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

inputRangeEl.addEventListener("input", changeText);
function changeText() {
  spanTextEl.style.fontSize = `${Number(inputRangeEl.value)}px`;
}
