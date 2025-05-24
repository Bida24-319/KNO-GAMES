document.addEventListener("DOMContentLoaded", function () {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("checkout-cart");
  const totalElement = document.getElementById("checkout-total");

  let total = 0;
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `P{item.product} - P{item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = `$${total.toFixed(2)}`;
});

document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Generate random order number
  const orderNumber = "GH" + Math.floor(Math.random() * 90000 + 10000);
  document.getElementById("order-number").textContent = orderNumber;

  // Hide form, show confirmation
  document.getElementById("checkout-form").style.display = "none";
  document.getElementById("confirmation").style.display = "block";

  // Clear localStorage
  localStorage.removeItem("cart");
  localStorage.removeItem("total");

  // Redirect after 5 seconds
  setTimeout(() => {
    window.location.href = "index.html";
  }, 5000);
});
