// CART SERVICE – handles localStorage only

const CART_KEY = "booknest-cart";

// Get all items
export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

// Save updated items
export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add one book to cart
export function addToCart(book) {
  const cart = getCart();
  cart.push(book);
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

  const count = getCart().length;

  if (count > 0) {
    countEl.textContent = count;
    countEl.style.display = "inline-block"; // show the number
  } else {
    countEl.textContent = ""; // hide the number
    countEl.style.display = "none";
  }
}

