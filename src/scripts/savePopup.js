// savePopup.js

export function showSavePopup(bookTitle) {
    const overlay = document.getElementById('save-popup-overlay');
    const titleEl = document.getElementById('save-popup-title');
    const continueBtn = document.getElementById('save-continue-shopping');

    if (!overlay || !titleEl) return;

    // 1. Set the Title
    titleEl.innerHTML = `<strong>${bookTitle}</strong> has been saved to your nest!`;

    // 2. Show the Overlay (using your CSS class .visible)
    overlay.classList.add('visible');

    // 3. Define Close Function
    const closeSavePopup = () => {
        overlay.classList.remove('visible');
    };

    // 4. Close on "Continue Shopping"
    continueBtn.onclick = closeSavePopup;

    // 5. Close on Outside Click
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            closeSavePopup();
        }
    };
}