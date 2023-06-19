const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", changeOutput);
function changeOutput() {
  outputEl.textContent = inputEl.value;
}
