const inputEl = document.querySelector("#validation-input");

const onInputBlur = (event) => {
  const requiredLength = inputEl.getAttribute("data-length");

  if (Number(requiredLength) === event.currentTarget.value.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", onInputBlur);
