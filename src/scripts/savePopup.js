// Helper function to show a temporary popup message
function showSaveToast(message, isSuccess = true) {
    // 1. Create the element
    const toast = document.createElement("div");
    toast.className = "save-toast"; 
    toast.textContent = message;
    
    // Optional: Add a modifier class for error/info styles
    if (!isSuccess) toast.classList.add("save-toast-info");

    // 2. Append to body
    document.body.appendChild(toast);

    // 3. Trigger animation (allow browser to render first)
    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    // 4. Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
        toast.addEventListener("transitionend", () => {
            toast.remove();
        });
    }, 3000);
};