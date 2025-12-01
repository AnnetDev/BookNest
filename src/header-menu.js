 document.addEventListener("DOMContentLoaded", function() {
        // 1. Select the elements
        const menuIcon = document.querySelector(".icon-menu");
        const subMenu = document.getElementById("subMenu");

        // 2. Add the click event listener
        menuIcon.addEventListener("click", function() {
            // This adds/removes the class that sets max-height to 400px
            subMenu.classList.toggle("open-menu");
        });
    });
    

