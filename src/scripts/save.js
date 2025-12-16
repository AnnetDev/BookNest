// saveService.js – handles localStorage for saved items

const SAVED_KEY = "booknest-saved";

// Initialize saved list in localStorage if missing
export function initSaved() {
    const saved = localStorage.getItem(SAVED_KEY);
    if (!saved) {
        localStorage.setItem(SAVED_KEY, JSON.stringify([]));
    }
}

export function getSaved() {
    initSaved(); 
    try {
        return JSON.parse(localStorage.getItem(SAVED_KEY)) || [];
    } catch (e) {
        localStorage.setItem(SAVED_KEY, JSON.stringify([]));
        return [];
    }
}

// Save updated items
export function saveSavedList(list) {
  localStorage.setItem(SAVED_KEY, JSON.stringify(list));
}

// Add one book to saved list
export function addToSaved(book) {
  const savedList = getSaved();
  
  // Optional: Check if book is already saved to avoid duplicates
  const exists = savedList.some(item => item.title === book.title);
  if (!exists) {
      savedList.push(book);
      saveSavedList(savedList);
      return true; // Return true if added
  }
  return false; // Return false if already exists
}

// Clear saved list
export function clearSaved() {
  localStorage.removeItem(SAVED_KEY);
}

// Update saved icon count
export function updateSavedCount() {
  const countEl = document.getElementById("save-count");
  if (!countEl) return;

  const count = getSaved().length;

  if (count > 0) {
    countEl.textContent = count;
    countEl.style.display = "inline-block"; 
  } else {
    countEl.textContent = ""; 
    countEl.style.display = "none";
  }
}
