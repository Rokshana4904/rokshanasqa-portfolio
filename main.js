/* ==============================
   Ratri Portfolio - main.js
   ============================== */

/* ---------- HERO FADE-IN (only if hero exists) ---------- */
window.addEventListener("load", () => {
  const heroItems = document.querySelectorAll(
    ".avatar-ring, .hello, .title, .subtitle, .socials"
  );

  if (heroItems.length) {
    heroItems.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(18px)";
      item.style.transition = "opacity .6s ease, transform .6s ease";

      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 120);
    });
  }
});

/* ---------- MOBILE MENU TOGGLE ---------- */
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.getElementById("mobileMenu");

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.style.display = "none";
  mobileMenu.dataset.open = "false";
}

function openMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.style.display = "block";
  mobileMenu.dataset.open = "true";
}

if (menuBtn && mobileMenu) {
  // initial state
  mobileMenu.dataset.open = "false";

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = mobileMenu.dataset.open === "true";
    if (isOpen) closeMobileMenu();
    else openMobileMenu();
  });

  // close when clicking any link inside menu
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMobileMenu());
  });

  // close when clicking outside
  document.addEventListener("click", (e) => {
    const clickedInside =
      mobileMenu.contains(e.target) || menuBtn.contains(e.target);
    if (!clickedInside) closeMobileMenu();
  });

  // close when window resizes (prevents stuck menu)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMobileMenu();
  });
}

/* ---------- FOOTER YEAR ---------- */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ---------- OPTIONAL CONSOLE SIGNATURE ---------- */
console.log(
  "%cRokshana Talukder Ratri | SQA Portfolio",
  "color:#7fe0ff;font-size:14px;font-weight:bold;"
);
