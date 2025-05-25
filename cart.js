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
