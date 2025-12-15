// CART SERVICE – handles localStorage only

const CART_KEY = "booknest-cart";

// Initialize cart in localStorage if missing
export function initCart() {
    const cart = localStorage.getItem(CART_KEY);
    if (!cart) {
        localStorage.setItem(CART_KEY, JSON.stringify([]));
    }
}

export function getCart() {
    initCart(); 
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
        localStorage.setItem(CART_KEY, JSON.stringify([]));
        return [];
    }
}

// Save updated items
export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add one book to cart
export function addToCart(book) {
  const cart = getCart();

  // Check if book already in cart (by title)
  const existingBook = cart.find(item => item.title === book.title);
  if (existingBook) {
    // If exists, increase count
    existingBook.count = (existingBook.count || 1) + 1;
  } else {
    cart.push({...book, count: 1});
  } 
  saveCart(cart);
}

// Clear cart
export function clearCart() {
  localStorage.removeItem(CART_KEY);
}

// Update cart icon count

export function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (!countEl) return;

  const cart = getCart();
  const count = cart.reduce((sum, item) => {
    return sum + (item.count || 1);
  }, 0);

  if (count > 0) {
    countEl.textContent = count;
    countEl.style.display = "inline-block"; // show the number
  } else {
    countEl.textContent = ""; // hide the number
    countEl.style.display = "none";
  }
}

export function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);      // delete 1 element by index
  saveCart(cart);
}

export function increaseCount(index) {
  const cart = getCart();
  cart[index].count = (cart[index].count || 1) + 1;
  saveCart(cart);
}

export function decreaseCount(index) {
  const cart = getCart();
  if (cart[index].count > 1) {
    cart[index].count -= 1;
    saveCart(cart);
  }
}

export function showFullSuccessAnimation() {
    // Create overlay
    const overlay = document.createElement("div");
    overlay.classList.add("success-overlay");

    overlay.innerHTML = `
        <div class="success-check-container">
            <div class="success-circle">
                <svg viewBox="0 0 52 52" class="success-svg">
                    <path class="success-check" fill="none" stroke="#fff" stroke-width="6"
                          d="M14 27 l8 8 l16 -16" />
                </svg>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    // Sound effect
    const audio = new Audio(
        "data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAA..."
    );
    audio.volume = 0.25;
    audio.play().catch(() => {});

    // Trigger animation
    requestAnimationFrame(() => overlay.classList.add("visible"));

    // Remove after done
    setTimeout(() => {
        overlay.classList.remove("visible");
        overlay.addEventListener("transitionend", () => overlay.remove());
    }, 3000);
}


