const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const createIngredientsItems = (items) => {
  return items.map((item) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = item;
    ingredientItem.classList.add("item");

    return ingredientItem;
  });
};

const items = createIngredientsItems(ingredients);
ingredientsListEl.append(...items);

console.log(ingredientsListEl);
