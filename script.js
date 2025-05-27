const gameData = {
  "God Of War": {
    title: "God Of War",
    description: "Kratos, now in the Norse realm, embarks on a deeply personal journey with his son Atreus to spread the ashes of his wife. Along the way, they face gods, monsters, and revelations about their past and future."
  },
  "Zenless Zone Zero": {
    title: "Zenless Zone Zero",
    description: "An upcoming action RPG from HoYoverse set in a post-apocalyptic world plagued by supernatural disasters called Hollows. Players act as a Proxy, guiding characters through high-paced combat and urban mysteries."
  },
  "Genshin Impact": {
    title: "Genshin Impact",
    description: "An open-world action RPG set in the fantasy land of Teyvat. Players explore, battle, and uncover the secrets of this world while searching for their lost sibling."
  },
  "Wuthering Waves": {
    title: "Wuthering Waves",
    description: "An action RPG set in a post-cataclysmic world. Players take on the role of a Rover to explore ruins, battle powerful enemies, and uncover the history of a broken civilization."
  },
  "Red Dead Redemption": {
    title: "Red Dead Redemption",
    description: "Set in the fading Wild West, outlaw John Marston is forced by the government to hunt down his former gang members to ensure his family's safety."
  },
  "Red Dead Redemption 2": {
    title: "Red Dead Redemption 2",
    description: "A prequel to the first game, following Arthur Morgan, a loyal member of the Van der Linde gang, as he navigates loyalty, betrayal, and survival during the decline of the outlaw era."
  },
  "Portal": {
    title: "Portal",
    description: "A puzzle-platformer where players use a portal gun to navigate test chambers. The sarcastic AI GLaDOS observes your progress, revealing dark secrets behind the testing facility."
  },
  "The Last Of Us": {
    title: "The Last Of Us",
    description: "Joel, a smuggler, is tasked with escorting a teenage girl, Ellie, across a post-apocalyptic U.S. as humanity struggles to survive against a fungal infection and societal collapse."
  },
  "The Last Of Us 2": {
    title: "The Last Of Us 2",
    description: "Years later, Ellie seeks revenge after a traumatic event, challenging her morality and the cycle of violence in a grim, emotional journey."
  },
  "Rocket League": {
    title: "Rocket League",
    description: "A high-octane sports game that combines soccer with rocket-powered cars. Players compete in fast-paced, physics-based matches both solo and online."
  },
  "Hollow Knight": {
    title: "Hollow Knight",
    description: "A challenging action-adventure set in the mysterious, ruined kingdom of Hallownest. Players control a silent knight as they explore, fight, and uncover ancient secrets."
  },
  "SpiderMan": {
    title: "SpiderMan",
    description: "Play as Peter Parker in a cinematic superhero story that blends web-slinging action with emotional depth as you protect New York City from iconic villains."
  },
  "Undertale": {
    title: "Undertale",
    description: "An indie RPG where your choices matter—fight or befriend monsters in a quirky, emotionally powerful story with multiple endings and fourth-wall-breaking humor."
  },
  "Star Wars: Battlefront 2": {
    title: "Star Wars: Battlefront 2",
    description: "Experience large-scale battles across the Star Wars universe. Includes a campaign from the Empire’s perspective and extensive multiplayer modes."
  },
  "Call Of Duty: Modern Warfare (2019)": {
    title: "Call Of Duty: Modern Warfare (2019)",
    description: "A gritty reboot of the Modern Warfare series featuring a morally gray campaign with familiar characters like Captain Price, and a focus on realism and global conflict."
  },
  "Five Nights at Freddy's 2": {
    title: "Five Nights at Freddy's 2",
    description: "A horror game where you must survive nights as a security guard in a haunted pizzeria, defending yourself against malfunctioning animatronics."
  },
  "Amanda the Adventurer": {
    title: "Amanda the Adventurer",
    description: "A horror game disguised as a children’s TV show. As you watch eerie episodes of Amanda and her sheep friend Wooly, you uncover dark secrets hidden in the tapes."
  },
  "Poppy Playtime": {
    title: "Poppy Playtime",
    description: "A horror puzzle game where you explore an abandoned toy factory and evade terrifying living toys like Huggy Wuggy while solving mysteries."
  },
  "Elden Ring": {
    title: "Elden Ring",
    description: "An expansive fantasy action RPG from FromSoftware. Players traverse the Lands Between to collect Great Runes and become the Elden Lord, facing brutally challenging foes along the way."
  },
  "Minecraft": {
    title: "Minecraft",
    description: "A sandbox game where you can build, explore, and survive in a blocky, procedurally generated world. Play creatively or in survival mode against monsters and the environment."
  }
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const countElement = document.getElementById("cart-count");
  if (countElement) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countElement.textContent = totalItems;
  }
}
function addToCart(product, price) {
  const index = cart.findIndex(item => item.name === product);
  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ name: product, price: price, quantity: 1 });
  }

  saveCart();
  renderCart();
}


function changeQuantity(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) cart.splice(index, 1);
  saveCart();
  renderCart();
}

function removeFromCart(index) {
  if (cart[index]) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
  }
}

function clearCart() {
  if (confirm("Are you sure you want to clear the cart?")) {
    cart = [];
    saveCart();
    renderCart();
  }
}


function renderCart() {
  const cartList = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  if (!cartList || !totalElement) return;

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.product} - P${item.price.toFixed(2)} x ${item.quantity} = P${subtotal.toFixed(2)}
      <button class="increase" data-index="${index}">+</button>
      <button class="decrease" data-index="${index}">−</button>
      <button class="remove" data-index="${index}">Remove</button>
    `;
    cartList.appendChild(li);
  });

  totalElement.textContent = total.toFixed(2);
}

function renderDrawerCart() {
  const drawerList = document.getElementById("drawer-cart-items");
  const totalElement = document.getElementById("drawer-total");
  if (!drawerList || !totalElement) return;

  drawerList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const li = document.createElement("li");
    li.textContent = `${item.product} - P${item.price.toFixed(2)} x ${item.quantity} = P${subtotal.toFixed(2)}`;
    drawerList.appendChild(li);
  });

  totalElement.textContent = total.toFixed(2);
}


function showDescription(key) {
  const data = gameData[key];
  if (!data) return;

  const box = document.getElementById("description-box");
  if (!box) return;

  document.getElementById("game-title").textContent = data.title;
  document.getElementById("game-description").textContent = data.description;
  box.style.display = "block";
}

function closeDescription() {
  const box = document.getElementById("description-box");
  if (box) box.style.display = "none";
}


function toggleCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (!drawer) return;

  drawer.classList.toggle("open");
  renderDrawerCart();
}


document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  updateCartCount();

  // Cart item button events
  const cartList = document.getElementById("cart-items");
  if (cartList) {
    cartList.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      if (e.target.classList.contains("increase")) changeQuantity(index, 1);
      if (e.target.classList.contains("decrease")) changeQuantity(index, -1);
      if (e.target.classList.contains("remove")) removeFromCart(index);
    });
  }

  // Floating cart toggle
  const cartBtn = document.getElementById("floating-cart-btn");
  if (cartBtn) cartBtn.addEventListener("click", toggleCartDrawer);
});

// =====================
// Global Access (optional)
// =====================
window.addToCart = addToCart;
window.clearCart = clearCart;
window.showDescription = showDescription;
window.closeDescription = closeDescription;
window.goToCheckout = () => window.location.href = "checkout.html";

