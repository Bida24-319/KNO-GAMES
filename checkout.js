document.addEventListener("DOMContentLoaded", function () {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("checkout-cart");
  const totalElement = document.getElementById("checkout-total");

  if (!cartList || !totalElement) return; // Safety check if elements missing

  let total = 0;
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - P${(item.price * item.quantity).toFixed(2)} x ${item.quantity}`;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  });

  totalElement.textContent = `P${total.toFixed(2)}`;
});

const checkoutForm = document.getElementById("checkout-form");

if (checkoutForm) {
  checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Generate random order number
    const orderNumber = "GH" + Math.floor(Math.random() * 90000 + 10000);
    const orderNumberElement = document.getElementById("order-number");
    if (orderNumberElement) {
      orderNumberElement.textContent = orderNumber;
    }

    // Hide form, show confirmation message
    this.style.display = "none";
    const confirmation = document.getElementById("confirmation");
    if (confirmation) {
      confirmation.style.display = "block";
    }

    // Clear cart data
    localStorage.removeItem("cart");
    localStorage.removeItem("total");

    // Redirect back to home after 5 seconds
    setTimeout(() => {
      window.location.href = "index.html";
    }, 5000);
  });
}
