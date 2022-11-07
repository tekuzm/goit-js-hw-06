const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createIngredientsItems = (items) => {
  return items.map((item) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = item;
    ingredientItem.classList.add("item");

    return ingredientItem;
  });
};

const items = createIngredientsItems(ingredients);
ingredientsList.append(...items);

console.log(ingredientsList);
