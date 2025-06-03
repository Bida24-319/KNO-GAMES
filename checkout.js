document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("checkout-cart");
  const totalElement = document.getElementById("checkout-total");
  let total = 0;

  cart.forEach(item => {
    const name = item.name || "Unknown Item";
    const price = item.price;
    const quantity = item.quantity;

    total += price * quantity;

    const cartItemHTML = `<li class="list-group-item bg-dark text-light border-light">${name} - ₱${price.toFixed(2)} x ${quantity}</li>`;
    cartList.innerHTML += cartItemHTML;
  });

  totalElement.textContent = `₱${total.toFixed(2)}`;
});

document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const orderNumber = "GH" + Math.floor(Math.random() * 90000 + 10000);
  document.getElementById("order-number").textContent = orderNumber;

  document.getElementById("checkout-form").style.display = "none";

  // Show thank-you alert
  const successAlert = document.querySelector(".alert-success");
  if (successAlert) {
    successAlert.style.display = "block";
  }

  localStorage.removeItem("cart");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 5000);
});

