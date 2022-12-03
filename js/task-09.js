function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  color: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

refs.changeColorBtn.addEventListener("click", () => {
  let color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.color.textContent = color;
});
