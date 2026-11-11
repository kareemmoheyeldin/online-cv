import "./styles.css";

// Mobile nav toggle
const menuBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuIcon.classList.toggle("hidden", isOpen);
  closeIcon.classList.toggle("hidden", !isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
});

// Close mobile nav on link click
mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    document.body.style.overflow = "";
  });
});

// Sticky nav background on scroll
const nav = document.getElementById("main-nav");
const onScroll = () => {
  nav?.classList.toggle("nav-scrolled", window.scrollY > 40);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Active nav link highlighting
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const highlightNav = () => {
  const scrollY = window.scrollY + 120;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.toggle(
          "text-white",
          link.getAttribute("href") === `#${id}`
        );
        link.classList.toggle(
          "opacity-70",
          link.getAttribute("href") !== `#${id}`
        );
      });
    }
  });
};
window.addEventListener("scroll", highlightNav, { passive: true });
