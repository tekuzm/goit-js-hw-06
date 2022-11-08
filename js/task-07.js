const fontSizeSlider = document.querySelector("#font-size-control");
const pageContent = document.querySelector("#text");

const changeFontSize = (event) => {
  pageContent.style.fontSize = event.currentTarget.value + "px";
};

fontSizeSlider.addEventListener("input", changeFontSize);
