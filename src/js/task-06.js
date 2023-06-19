const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", changeBorderColor);
function changeBorderColor() {
  if (inputEl.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.replace("invalid", "valid");
  }
}
