let item = Number(document.querySelector(".item-number").textContent);

document
  .querySelector(".add-to-cart-btn")
  .addEventListener("click", function () {
    item = item + 1;
  });
