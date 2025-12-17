// ======================
// Load Header + Animate On Load
// ======================

document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.getElementById("header-placeholder");

  if (!headerPlaceholder) return;

  fetch("partials/header.html")
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
const projectSwiper = new Swiper(".projectSwiper", {
  // 1. Enable 3D Depth Effect
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",

  // --- FIX 1: AUTO-RESIZE & CENTER ON LOAD ---
  // This forces Swiper to re-calculate the "center" position 
  // immediately after the HTML/Images finish rendering.
  observer: true,
  observeParents: true,

  // 2. Configure the Depth
  coverflowEffect: {
    rotate: 8,
    stretch: -30,
    depth: 260,
    modifier: 1.1,
    slideShadows: true,
  },

  // --- FIX 2: PREVENT LOOP STOPPING ---
  loop: true,
  // When using slidesPerView: 'auto', Swiper struggles to calculate 
  // how many duplicates it needs. 'loopedSlides' forces it to create 
  // a buffer of 4 slides on each side.
  // Since you have 3 real slides, this ensures there is always content ready.
  loopedSlides: 3, 

  // 4. Enable Autoplay
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  speed: 900,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
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
// ======================
// Mobile Menu Toggle (Apple Style)
// ======================
function initHeaderMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  // Optional: Grab body to prevent scrolling when menu is open
  const body = document.body;

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    // 1. Toggle the hamburger icon animation into an 'X'
    menuBtn.classList.toggle("open");

    // 2. Toggle the menu slide-down animation state
    mobileMenu.classList.toggle("active");

    // 3. Optional: Lock body scroll when menu is open for better UX
    if (mobileMenu.classList.contains("active")) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
  });

  // Optional: Close menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
          menuBtn.classList.remove("open");
          mobileMenu.classList.remove("active");
          body.style.overflow = '';
      });
  });
}
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("scrollTrack");

    const titleText = "ZYPHERX";

    function makeSpan() {
        const s = document.createElement("span");
        s.textContent = titleText;
        s.className =
            "text-6xl md:text-8xl lg:text-[10vw] font-black text-primary-dark uppercase tracking-tighter mx-10 py-4 whitespace-nowrap";
        return s;
    }

    // Fill one full set
    for (let i = 0; i < 10; i++) {
        track.appendChild(makeSpan());
    }

    // Clone entire set to track
    track.appendChild(track.cloneNode(true));

    let x = 0;
    const speed = 0.5;

    function loop() {
        x -= speed;

        // width of first half (not whole track)
        const halfWidth = track.scrollWidth / 2;

        // when first half is completely gone, shift back by halfWidth
        if (Math.abs(x) >= halfWidth) {
            x += halfWidth;
        }

        track.style.transform = `translateX(${x}px)`;
        requestAnimationFrame(loop);
    }

    loop();
});
