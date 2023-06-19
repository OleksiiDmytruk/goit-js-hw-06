const spanEl = document.querySelector("#value");
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtnEl.addEventListener("click", decrementOnClick);
incrementBtnEl.addEventListener("click", incrementOnClick);

function decrementOnClick() {
  counterValue -= 1;
  updateValue();
}
function incrementOnClick() {
  counterValue += 1;
  updateValue();
}

function updateValue() {
  spanEl.textContent = counterValue;
}
