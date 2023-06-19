const listCategoriesEl = document.querySelector("#categories");

console.log("Number of categories:", listCategoriesEl.children.length);

[...listCategoriesEl.children].forEach((child) =>
  console.log(`Category: ${child.firstElementChild.textContent}
Elements: ${child.lastElementChild.childElementCount}`)
);
