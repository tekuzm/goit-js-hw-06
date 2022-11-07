// get number of categories
const countCategories = document.querySelectorAll(".item");
console.log("Number of categories:", countCategories.length);

// get children names
const categoryName = document
  .querySelectorAll(".item h2")
  .forEach((element) => console.log("Category:", element.textContent));

for (let li of document.querySelectorAll(".item")) {
  // get descendants count
  let count = li.querySelectorAll("li").length;
  console.log("Elements:", count);
}
