 document.addEventListener("DOMContentLoaded", function () {
  // --- Elements ---
  const menuBtn = document.querySelector(".menu-icon"); // the button element
  const menuImg = document.querySelector(".menu-icon img, .icon-menu"); // fallback to any inner image/class
  const subMenu = document.getElementById("subMenu");

  // --- Sanity checks (open the console to see these messages) ---
  if (!menuBtn) {
    console.error("menuBtn (.menu-icon) not found in DOM");
    return;
  }
  if (!subMenu) {
    console.error("subMenu (#subMenu) not found in DOM");
    return;
  }
  console.log("burger menu script initialized", { menuBtn, menuImg, subMenu });

  // Utility to know if menu is open
  const isOpen = () => subMenu.classList.contains("open-menu");

  // Toggle handler
  function toggleMenu(e) {
    e.stopPropagation(); // prevent the document click handler from immediately closing it
    subMenu.classList.toggle("open-menu");
    menuBtn.setAttribute("aria-expanded", String(isOpen()));
  }

  // Close handler
  function closeMenu() {
    if (isOpen()) {
      subMenu.classList.remove("open-menu");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  }

  // 1) ensure clicks on button OR image toggle the menu
  menuBtn.addEventListener("click", toggleMenu);
  if (menuImg && menuImg !== menuBtn) {
    // if image is separate clickable element, guard it too
    menuImg.addEventListener("click", toggleMenu);
  }

  // 2) Prevent clicks inside the submenu from bubbling up (so they don't close it)
  subMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // 3) Close when clicking anywhere else on document / window
  document.addEventListener("click", function (e) {
    // If click target is not inside submenu and not the button (or its children)
    if (!subMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // 4) Close on Escape key (nice UX)
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  // 5) Touch devices: close on touchstart outside (some browsers treat touch differently)
  document.addEventListener("touchstart", function (e) {
    if (!subMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  }, { passive: true });

});

