document.addEventListener("DOMContentLoaded", function () {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("checkout-cart");
  const totalElement = document.getElementById("checkout-total");

  let total = 0;
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - ₱${item.price.toFixed(2)} x ${item.quantity || 1}`;
    cartList.appendChild(li);
    total += item.price * (item.quantity || 1);
  });

  totalElement.textContent = `₱${total.toFixed(2)}`;
});

document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Generate random order number starting with GH + 5 digits
  const orderNumber = "GH" + Math.floor(Math.random() * 90000 + 10000);
  document.getElementById("order-number").textContent = orderNumber;

  // Hide checkout form and show confirmation message
  document.getElementById("checkout-form").style.display = "none";
  document.getElementById("confirmation").style.display = "block";

  // Clear the cart from localStorage
  localStorage.removeItem("cart");
  localStorage.removeItem("total");

  // Redirect to home page after 5 seconds
  setTimeout(() => {
    window.location.href = "index.html";
  }, 5000);
});
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Hide the form
  form.style.display = "none";

  // Show the thank-you message
  successAlert.style.display = "block";

  // Clear the cart
  localStorage.removeItem("cart");

  // Optional redirect
  setTimeout(() => {
    window.location.href = "index.html";
  }, 5000);
});
