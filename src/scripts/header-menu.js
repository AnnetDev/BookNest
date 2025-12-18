document.addEventListener("DOMContentLoaded", function () {
    // Select the elements
    const menuIcon = document.querySelector(".menu-icon");
    const subMenu = document.getElementById("subMenu");

    // Add the click event listener
    menuIcon.addEventListener("click", function (e) {
        e.stopPropagation(); // Added by Anna

        // This adds/removes the class that sets max-height to 400px
        subMenu.classList.toggle("open-menu");
    });

    document.addEventListener("click", function (e) {
        if (!subMenu.contains(e.target) && !menuIcon.contains(e.target)) subMenu.classList.remove("open-menu"); // if click outside
        if (subMenu.contains(e.target) && e.target.closest("a, button, li")) subMenu.classList.remove("open-menu"); // if click on a link
    });
});
