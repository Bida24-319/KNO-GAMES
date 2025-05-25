document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cart-items");
  const totalSpan = document.getElementById("total");
  const emptyMessage = document.getElementById("empty-message");

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
        ${item.name} - P${item.price.toFixed(2)} x ${quantity} = P${subtotal.toFixed(2)}
        <button class="increase" data-index="${index}">+</button>
        <button class="decrease" data-index="${index}">−</button>
        <button class="remove" data-index="${index}">Remove</button>
      `;
      cartList.appendChild(li);
    });

    totalSpan.textContent = total.toFixed(2);
  }

  function changeQuantity(index, amount) {
    if (cart[index]) {
      cart[index].quantity = (cart[index].quantity || 1) + amount;
      if (cart[index].quantity <= 0) {
        cart.splice(index, 1); // Remove item if quantity drops to 0 or less
      }
      saveCart();
      updateCartView();
    }
  }

  function removeFromCart(index) {
    if (cart[index]) {
      cart.splice(index, 1);
      saveCart();
      updateCartView();
    }
  }

  function clearCart() {
    const confirmClear = confirm("Are you sure you want to clear the cart?");
    if (confirmClear) {
      cart = [];
      saveCart();
      updateCartView();
    }
  }

  // Event delegation for buttons inside the cart list
  cartList.addEventListener("click", (e) => {
    if (!e.target.dataset.index) return;

    const index = parseInt(e.target.dataset.index, 10);

    if (e.target.classList.contains("increase")) {
      changeQuantity(index, 1);
    } else if (e.target.classList.contains("decrease")) {
      changeQuantity(index, -1);
    } else if (e.target.classList.contains("remove")) {
      removeFromCart(index);
    }
  });

  // Expose clearCart to global so you can attach it to a button outside if needed
  window.clearCart = clearCart;

  updateCartView();
});

