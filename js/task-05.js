const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const onInputChange = (event) => {
  const inputValue = event.currentTarget.value;
  // output = input value
  if (inputValue === "") {
    refs.output.textContent = "Anonymous";
  } else {
    refs.output.textContent = inputValue;
  }
};

refs.input.addEventListener("input", onInputChange);
