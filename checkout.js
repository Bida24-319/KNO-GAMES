document.addEventListener("DOMContentLoaded", function () {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("checkout-cart");
  const totalElement = document.getElementById("checkout-total");
 
  let total = 0;
  cartItems.forEach(item => {
    const li = document.createElement("li");
li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });
 
  totalElement.textContent = total.toFixed(2);
});
 
document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();
 
  const orderNumber = "GH" + Math.floor(Math.random() * 90000 + 10000);
  document.getElementById("order-number").textContent = orderNumber;
 
  document.getElementById("checkout-form").style.display = "none";
  document.getElementById("confirmation").style.display = "block";
 
  localStorage.removeItem("cart");
 
  setTimeout(() => {
    window.location.href = "index.html";
  }, 5000);
});
