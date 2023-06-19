const loginFormEl = document.querySelector(".login-form");
loginFormEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    alert(`Complete all fields!!!`);
  } else {
    const resalt = {
      login: email.value,
      kay: password.value,
    };
    console.log(resalt);
  }
  loginFormEl.reset();
}
