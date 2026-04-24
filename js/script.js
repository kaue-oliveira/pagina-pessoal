document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggles = document.querySelectorAll("[data-theme-toggle], #themeToggle");

  const saved = localStorage.getItem("theme") || "dark";
  setTheme(saved);

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      setTheme(next);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      const menu = document.querySelector("[data-mobile-menu]");
      if (menu) menu.classList.add("hidden");
    });
  });

  const mobileToggle = document.querySelector("[data-mobile-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  initActiveSectionIndicator();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealItems.forEach((el) => io.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  }
});

function initActiveSectionIndicator() {
  const navLinks = Array.from(
    document.querySelectorAll(".site-header nav ul a[href^='#'], [data-mobile-menu] a[href^='#']")
  );

  if (!navLinks.length) return;

  const sectionIds = [...new Set(navLinks.map((link) => link.getAttribute("href")).filter(Boolean))];
  const sections = sectionIds
    .map((id) => document.querySelector(id))
    .filter((section) => section instanceof HTMLElement);

  if (!sections.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === id;
      link.classList.toggle("is-active", isCurrent);
      if (isCurrent) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateActiveSection = () => {
    const viewportMarker = window.scrollY + 130;
    let currentId = sectionIds[0];

    sections.forEach((section) => {
      if (section.offsetTop <= viewportMarker) {
        currentId = `#${section.id}`;
      }
    });

    setActive(currentId);
  };

  updateActiveSection();
  window.addEventListener("scroll", updateActiveSection, { passive: true });
}

function setTheme(theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  document.querySelectorAll("[data-theme-toggle], #themeToggle").forEach((btn) => {
    btn.textContent = theme === "dark" ? "Tema claro" : "Tema escuro";
    btn.setAttribute("aria-label", theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro");
  });
}