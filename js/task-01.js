// get number of categories
const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);

// get children names and elements number
items.forEach((item) => {
  const name = item.querySelector("h2");
  console.log("Category: ", name.textContent);

  const count = item.querySelectorAll("li").length;
  console.log("Elements: ", count);
});
