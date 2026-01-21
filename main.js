/* ==============================
   Ratri Portfolio - main.js
   ============================== */

/* ---------- SMOOTH SCROLL ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* ---------- ACTIVE NAV LINK ON SCROLL ---------- */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* ---------- HERO FADE-IN ANIMATION ---------- */
window.addEventListener("load", () => {
  const heroItems = document.querySelectorAll(
    ".avatar-ring, .hello, .title, .subtitle, .socials, .hero-buttons"
  );

  heroItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "all 0.6s ease";

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 120);
  });
});

/* ---------- SOCIAL ICON HOVER RIPPLE (SUBTLE) ---------- */
document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.boxShadow = "0 18px 45px rgba(79,124,255,.35)";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.boxShadow = "0 14px 35px rgba(79,124,255,.18)";
  });
});

/* ---------- OPTIONAL: CONSOLE SIGNATURE ---------- */
console.log(
  "%cRokshana Talukder Ratri | SQA Portfolio",
  "color:#4f7cff;font-size:14px;font-weight:bold;"
);
