slider.oninput = () => {
  const slider = document.querySelector("#font-size-control");
  const text = document.querySelector("#text");

  text.innerHTML = slider.value;
};
