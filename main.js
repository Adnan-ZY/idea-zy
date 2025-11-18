// ======================
// Load Header + Animate On Load
// ======================

document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.getElementById("header-placeholder");

  if (!headerPlaceholder) return;

  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      headerPlaceholder.innerHTML = data;

      // Initialize after load
      initHeaderMenu();
      animateHeader();
      animateNavItems();
    })
    .catch(() => {
      headerPlaceholder.innerHTML =
        `<p class="text-red-500">Could not load navigation.</p>`;
    });
});

// ======================
// Animate header when loaded
// ======================
function animateHeader() {
  const header = document.getElementById("header");
  const logo = document.querySelector(".logo-animate");

  setTimeout(() => {
    header.classList.remove("opacity-0", "-translate-y-4");
    if (logo) {
      logo.classList.remove("opacity-0", "scale-90");
    }
  }, 100);
}

// ======================
// Animate Desktop Nav Items
// ======================
function animateNavItems() {
  const items = document.querySelectorAll(".nav-item");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove("opacity-0", "translate-y-2");
    }, 300 + index * 120);
  });
}

// ======================
// Mobile Menu Toggle
// ======================
function initHeaderMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Animate hamburger → X
    menuBtn.classList.toggle("open");
  });
}
document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.getElementById("scrollingTitle");
    if (!titleElement) return;

    const titleText = "ZYPHERX";
    const scrollingTextSpan = document.createElement("span");

    scrollingTextSpan.textContent = titleText;
    scrollingTextSpan.classList.add(
        "text-6xl", "md:text-8xl", "lg:text-[10vw]",
        "font-black", "text-primary-dark",
        "uppercase", "tracking-tighter",
        "mx-10", "leading-none", "py-4"
    );

    for (let i = 0; i < 10; i++) {
        titleElement.appendChild(scrollingTextSpan.cloneNode(true));
    }

    let currentScroll = 0;
    let contentWidth = 0;
    const scrollSpeed = 0.3;

    function updateWidth() {
        const firstSpan = titleElement.querySelector("span");
        contentWidth = firstSpan.getBoundingClientRect().width;
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);

    function animateScroll() {
        currentScroll += scrollSpeed;
        if (currentScroll >= contentWidth) currentScroll = 0;
        titleElement.style.transform = `translateX(-${currentScroll}px)`;
        requestAnimationFrame(animateScroll);
    }

    animateScroll();
});