const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", changeBorderColor);
function changeBorderColor() {
  inputEl.classList.remove("valid", "invalid");
  if (inputEl.value.trim().length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
