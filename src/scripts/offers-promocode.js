const generateBtn = document.getElementById("offers-seasonal-generate-btn");
const codeBox = document.getElementById("offers-seasonal-code-box");
const codeValue = document.getElementById("offers-seasonal-code-value");

const PROMO_KEY = "booknest-seasonal-promo";

// Generate random promo code
function generatePromoCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";

    for (let i = 0; i < 8; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }

    return "BN-" + code;
}

// Copy code to clipboard
function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        const copyBtn = document.getElementById("promo-copy-btn");
        copyBtn.textContent = "Copied!";
        copyBtn.classList.add("copied");

        setTimeout(() => {
            copyBtn.textContent = "Copy Code";
            copyBtn.classList.remove("copied");
        }, 1500);
    });
}

// Disable button (UI + logic)
function lockButton() {
    generateBtn.disabled = true;
    generateBtn.textContent = "Code Generated";
    generateBtn.classList.add("disabled");
}

function showExistingCode(savedCode) {
    codeValue.textContent = savedCode;
    codeBox.classList.remove("hidden");
}

// 1) If promo already exists — show it and lock button
const existingCode = localStorage.getItem(PROMO_KEY);
if (existingCode) {
    showExistingCode(existingCode);
    lockButton();

    // attach copy button listener
    setTimeout(() => {
        const copyBtn = document.getElementById("promo-copy-btn");
        if (copyBtn) {
            copyBtn.onclick = () => copyCode(existingCode);
        }
    }, 50);
}

// 2) Generate new code ONCE
if (generateBtn) {
    generateBtn.addEventListener("click", () => {

        // Safety check
        if (generateBtn.disabled) return;

        const newCode = generatePromoCode();

        // Save code forever
        localStorage.setItem(PROMO_KEY, newCode);

        // Show UI
        codeValue.textContent = newCode;
        codeBox.classList.remove("hidden");
        lockButton();

        // Create copy button if not exists
        if (!document.getElementById("promo-copy-btn")) {
            const copyBtn = document.createElement("button");
            copyBtn.id = "promo-copy-btn";
            copyBtn.classList.add("offers-seasonal__copy-btn");
            copyBtn.textContent = "Copy Code";
            codeBox.appendChild(copyBtn);

            copyBtn.addEventListener("click", () => copyCode(newCode));
        }
    });
}
