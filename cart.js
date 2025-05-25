document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-items");
    const totalSpan = document.getElementById("total");
    const emptyMessage = document.getElementById("empty-message");

    function updateCartView() {
        cartList.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            emptyMessage.style.display = "block";
            return;
        }

        emptyMessage.style.display = "none";

        cart.forEach(item => {
            const li = document.createElement("li");
            const quantity = item.quantity || 1;
            const subtotal = item.price * quantity;
            li.textContent = `${item.name} x${quantity} - P${subtotal.toFixed(2)}`;
            cartList.appendChild(li);
            total += subtotal;
        });

        totalSpan.textContent = total.toFixed(2);
    }

    updateCartView();
});
function clearCart() {
  const confirmClear = confirm("Are you sure you want to clear the cart?");
  if (confirmClear) {
    cart = [];
    saveCart();
    renderCart();
  }
}
li.innerHTML = `
  ${item.product} - P${item.price.toFixed(2)} x ${item.quantity} = P${itemTotal.toFixed(2)}
  <button class="increase" data-index="${index}">+</button>
  <button class="decrease" data-index="${index}">−</button>
  <button class="remove" data-index="${index}">Remove</button>
`;
document.getElementById("cart-items").addEventListener("click", (e) => {
  const index = parseInt(e.target.dataset.index);
  if (e.target.classList.contains("increase")) {
    changeQuantity(index, 1);
  } else if (e.target.classList.contains("decrease")) {
    changeQuantity(index, -1);
  } else if (e.target.classList.contains("remove")) {
    removeFromCart(index);
  }
});
function renderCart() {
  const cartList = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  if (!cartList || !totalElement) return; // Prevent error

  // Continue rendering...
}
