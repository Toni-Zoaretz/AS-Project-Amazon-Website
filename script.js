const addItems = document.getElementById("btn-click");
let items = 0;

addItems.addEventListener("click", function () {
  items += 1;
  document.getElementById("items-add-to-cart").textContent = items;
});
