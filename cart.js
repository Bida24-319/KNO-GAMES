document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.getElementById("cart-items");
  const totalSpan = document.getElementById("total");
  const emptyMessage = document.getElementById("empty-message");

  let cart = loadCart();

  function loadCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCartView() {
    cartList.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      emptyMessage.style.display = "block";
      totalSpan.textContent = "0.00";
      return;
    }

    emptyMessage.style.display = "none";

    cart.forEach((item, index) => {
      const quantity = item.quantity || 1;
      const subtotal = item.price * quantity;
      total += subtotal;

      const li = document.createElement("li");
      li.innerHTML = `
        ${item.name} - ₱${item.price.toFixed(2)} x ${quantity} = ₱${subtotal.toFixed(2)}
        <button class="btn btn-sm btn-success increase" data-index="${index}">+</button>
        <button class="btn btn-sm btn-warning decrease" data-index="${index}">−</button>
        <button class="btn btn-sm btn-danger remove" data-index="${index}">Remove</button>
      `;
      cartList.appendChild(li);
    });

    totalSpan.textContent = total.toFixed(2);
  }

  function changeQuantity(index, amount) {
    if (!cart[index]) return;
    cart[index].quantity = (cart[index].quantity || 1) + amount;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartView();
  }

  function removeFromCart(index) {
    if (!cart[index]) return;
    cart.splice(index, 1);
    saveCart();
    updateCartView();
  }

  function clearCart() {
    if (confirm("Are you sure you want to clear the cart?")) {
      cart = [];
      saveCart();
      updateCartView();
    }
  }

  cartList.addEventListener("click", (e) => {
    const index = parseInt(e.target.dataset.index, 10);
    if (isNaN(index)) return;

    if (e.target.classList.contains("increase")) {
      changeQuantity(index, 1);
    } else if (e.target.classList.contains("decrease")) {
      changeQuantity(index, -1);
    } else if (e.target.classList.contains("remove")) {
      removeFromCart(index);
    }
  });

  // Expose clearCart globally
  window.clearCart = clearCart;

  updateCartView();
});


