const decrButton = document.querySelector("[data-action='decrement']");
const incrButton = document.querySelector("[data-action='increment']");
let counterValue = 0;
const counterValueEl = document.querySelector("#value");

incrButton.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.innerText = counterValue;
});

decrButton.addEventListener("click", () => {
  counterValue -= 1;
  counterValueEl.innerText = counterValue;
});
