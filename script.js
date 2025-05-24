const gameData = {
  God: {
    title: "God Of War",
    description: "Kratos, now in the Norse realm, embarks on a deeply personal journey with his son Atreus to spread the ashes of his wife. Along the way, they face gods, monsters, and revelations about their past and future."
  },
  Zenless: {
    title: "Zenless Zone Zero",
    description: "An upcoming action RPG from HoYoverse set in a post-apocalyptic world plagued by supernatural disasters called Hollows. Players act as a Proxy, guiding characters through high-paced combat and urban mysteries."
  },
  Genshin: {
    title: "Genshin Impact",
    description: "An open-world action RPG set in the fantasy land of Teyvat. Players explore, battle, and uncover the secrets of this world while searching for their lost sibling."
  },
  Wuthering: {
    title: "Wuthering Waves",
    description: "An action RPG set in a post-cataclysmic world. Players take on the role of a Rover to explore ruins, battle powerful enemies, and uncover the history of a broken civilization."
  },
  Red1: {
    title: "Red Dead Redemption",
    description: "Set in the fading Wild West, outlaw John Marston is forced by the government to hunt down his former gang members to ensure his family's safety."
  },
  Red2: {
    title: "Red Dead Redemption 2",
    description: "A prequel to the first game, following Arthur Morgan, a loyal member of the Van der Linde gang, as he navigates loyalty, betrayal, and survival during the decline of the outlaw era."
  },
  Portal: {
    title: "Portal",
    description: "A puzzle-platformer where players use a portal gun to navigate test chambers. The sarcastic AI GLaDOS observes your progress, revealing dark secrets behind the testing facility."
  },
  Last1: {
    title: "The Last Of Us",
    description: "Joel, a smuggler, is tasked with escorting a teenage girl, Ellie, across a post-apocalyptic U.S. as humanity struggles to survive against a fungal infection and societal collapse."
  },
  Last2: {
    title: "The Last Of Us 2",
    description: "Years later, Ellie seeks revenge after a traumatic event, challenging her morality and the cycle of violence in a grim, emotional journey."
  },
  Rocket: {
    title: "Rocket League",
    description: "A high-octane sports game that combines soccer with rocket-powered cars. Players compete in fast-paced, physics-based matches both solo and online."
  },
  Hollow: {
    title: "Hollow Knight",
    description: "A challenging action-adventure set in the mysterious, ruined kingdom of Hallownest. Players control a silent knight as they explore, fight, and uncover ancient secrets."
  },
  Spider: {
    title: "SpiderMan",
    description: "Play as Peter Parker in a cinematic superhero story that blends web-slinging action with emotional depth as you protect New York City from iconic villains."
  },
  Under: {
    title: "Undertale",
    description: "An indie RPG where your choices matter—fight or befriend monsters in a quirky, emotionally powerful story with multiple endings and fourth-wall-breaking humor."
  },
  Star: {
    title: "Star Wars: Battlefront 2",
    description: "Experience large-scale battles across the Star Wars universe. Includes a campaign from the Empire’s perspective and extensive multiplayer modes."
  },
  Call: {
    title: "Call Of Duty: Modern Warfare (2019)",
    description: "A gritty reboot of the Modern Warfare series featuring a morally gray campaign with familiar characters like Captain Price, and a focus on realism and global conflict."
  },
  Five: {
    title: "Five Nights at Freddy's",
    description: "A horror game where you must survive nights as a security guard in a haunted pizzeria, defending yourself against malfunctioning animatronics."
  },
  Amanda: {
    title: "Amanda the Adventurer",
    description: "A horror game disguised as a children’s TV show. As you watch eerie episodes of Amanda and her sheep friend Wooly, you uncover dark secrets hidden in the tapes."
  },
  Poppy: {
    title: "Poppy Playtime",
    description: "A horror puzzle game where you explore an abandoned toy factory and evade terrifying living toys like Huggy Wuggy while solving mysteries."
  },
  Elden: {
    title: "Elden Ring",
    description: "An expansive fantasy action RPG from FromSoftware. Players traverse the Lands Between to collect Great Runes and become the Elden Lord, facing brutally challenging foes along the way."
  },
  Mine: {
    title: "Minecraft",
    description: "A sandbox game where you can build, explore, and survive in a blocky, procedurally generated world. Play creatively or in survival mode against monsters and the environment."
  }
};

let cart = [];
let total = 0;

window.onload = function () {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const storedTotal = JSON.parse(localStorage.getItem("total")) || 0;
  cart = storedCart;
  total = storedTotal;
  updateCart();
};

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", JSON.stringify(total));
}

function updateCart() {
  const cartItem = document.getElementById("cart-items");
  cartItem.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
    cartItem.appendChild(li);
  });
  document.getElementById("total").textContent = total.toFixed(2);
}

function showDescription(key) {
  if (!gameData[key]) return;
  document.getElementById("game-title").textContent = gameData[key].title;
  document.getElementById("game-description").textContent = gameData[key].description;
  document.getElementById("description-box").style.display = "block";
}

function closeDescription() {
  document.getElementById("description-box").style.display = "none";
}

function goToCheckout() {
  window.location.href = "checkout.html";
}
