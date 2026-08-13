(() => {
    const toggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("site-nav");
    const overlay = document.getElementById("nav-overlay");

    if (!toggle || !navigation || !overlay) {
        return;
    }

    const setMenuOpen = (isOpen, restoreFocus = false) => {
        navigation.classList.toggle("is-open", isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
        overlay.hidden = !isOpen;
        document.body.classList.toggle("menu-open", isOpen);

        if (!isOpen && restoreFocus) {
            toggle.focus();
        }
    };

    toggle.addEventListener("click", () => {
        setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    overlay.addEventListener("click", () => setMenuOpen(false, true));

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
            setMenuOpen(false, true);
        }
    });

    const desktopView = window.matchMedia("(min-width: 901px)");
    desktopView.addEventListener("change", (event) => {
        if (event.matches) {
            setMenuOpen(false);
        }
    });
})();
