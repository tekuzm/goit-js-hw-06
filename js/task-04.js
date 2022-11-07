// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrButton = document.querySelector("[data-action='decrement']");
const incrButton = document.querySelector("[data-action='increment']");

incrButton.addEventListener("click", () => {
  let counterValue = document.querySelector("#value");
  let result = Number(counterValue.innerText) + 1;

  counterValue.innerText = result;
});

decrButton.addEventListener("click", () => {
  let counterValue = document.querySelector("#value");
  let result = Number(counterValue.innerText) - 1;

  counterValue.innerText = result;
});
