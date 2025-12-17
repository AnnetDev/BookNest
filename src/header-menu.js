document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const subMenu = document.getElementById("subMenu");

    if (!menuIcon || !subMenu) return;

    const isNativeControl = menuIcon.matches("button, a, input, select, textarea");

    if (!isNativeControl && !menuIcon.hasAttribute("tabindex")) {
        menuIcon.setAttribute("tabindex", "0");
        menuIcon.setAttribute("role", "button");
    }

    const isOpen = () => subMenu.classList.contains("open-menu");

    const setExpanded = (expanded) => {
        menuIcon.setAttribute("aria-expanded", String(expanded));
    };

    const getFirstFocusable = (root) => {
        return root.querySelector(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
    };

    const openMenu = ({ focusFirst = false } = {}) => {
        subMenu.classList.add("open-menu");
        setExpanded(true);

        if (focusFirst) {
            const first = getFirstFocusable(subMenu);
            if (first) first.focus();
        }
    };

    const closeMenu = ({ returnFocus = false } = {}) => {
        subMenu.classList.remove("open-menu");
        setExpanded(false);

        if (returnFocus) menuIcon.focus();
    };

    const toggleMenu = () => {
        if (isOpen()) closeMenu();
        else openMenu();
    };

    menuIcon.addEventListener("click", () => {
        toggleMenu();
    });

    menuIcon.addEventListener("keydown", (e) => {
        const key = e.key;

        if ((key === "Enter" || key === " ") && !isNativeControl) {
            e.preventDefault();
            toggleMenu();
            return;
        }

        if (key === "ArrowDown") {
            e.preventDefault();
            openMenu({ focusFirst: true });
            return;
        }

        if (key === "Escape") {
            e.preventDefault();
            closeMenu({ returnFocus: true });
        }
    });

    document.addEventListener("click", (e) => {
        if (!isOpen()) return;

        const target = e.target;
        const clickedInside =
            menuIcon.contains(target) || subMenu.contains(target);

        if (!clickedInside) closeMenu();
    });

    subMenu.addEventListener("click", (e) => {
        const item = e.target.closest(
            'a[href], button, [role="menuitem"], [data-menu-item]'
        );
        if (!item) return;

        closeMenu({ returnFocus: true });
    });

    subMenu.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            closeMenu({ returnFocus: true });
        }
    });
});