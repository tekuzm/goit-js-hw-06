const loginForm = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fulfill all the fields!");
  }
  const userData = { email: email.value, password: password.value };

  console.log(userData);
  event.currentTarget.reset();
};

loginForm.addEventListener("submit", onFormSubmit);
