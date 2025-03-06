document.addEventListener("DOMContentLoaded", function () {
    // Enhanced Smooth Scrolling
    document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
       anchor.addEventListener("click", function (e) {
          e.preventDefault();
 
          const headerOffset = document.querySelector("header").offsetHeight;
          const targetElement = document.querySelector(
             this.getAttribute("href")
          );
          const elementPosition =
             targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset - 20;
 
          window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
          });
 
          // Close mobile nav if open
          if (window.innerWidth <= 768) {
             document.getElementById("nav-menu").classList.remove("active");
          }
       });
    });
 
    // Enhanced Mobile Menu Toggle with Animation
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
 
    menuToggle.addEventListener("click", () => {
       navMenu.classList.toggle("active");
       // Animate hamburger icon
       menuToggle.classList.toggle("active");
 
       // Update aria-expanded
       const isExpanded = navMenu.classList.contains("active");
       menuToggle.setAttribute("aria-expanded", isExpanded);
    });
 
    // Enhanced Dark Mode Toggle with Local Storage
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
 
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
       document.body.classList.toggle("dark-mode");
       updateDarkModeIcon(true);
    } else if (currentTheme === "light") {
       document.body.classList.remove("dark-mode");
       updateDarkModeIcon(false);
    } else if (prefersDarkScheme.matches) {
       document.body.classList.add("dark-mode");
       updateDarkModeIcon(true);
    }
 
    darkModeToggle.addEventListener("click", () => {
       document.body.classList.toggle("dark-mode");
       const isDarkMode = document.body.classList.contains("dark-mode");
 
       // Update icon
       updateDarkModeIcon(isDarkMode);
 
       // Save user preference
       localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });
 
    function updateDarkModeIcon(isDark) {
       const icon = darkModeToggle.querySelector("i");
       if (isDark) {
          icon.classList.remove("fa-moon");
          icon.classList.add("fa-sun");
       } else {
          icon.classList.remove("fa-sun");
          icon.classList.add("fa-moon");
       }
    }
 
    // Enhanced scroll-based animations
    window.addEventListener("scroll", () => {
       const header = document.querySelector("header");
       if (window.scrollY > 100) {
          header.style.background = "var(--header-bg)";
          header.style.backdropFilter = "blur(10px)";
       } else {
          header.style.background = "var(--header-bg)";
          header.style.backdropFilter = "none";
       }
    });
 
    // Initialize AOS with enhanced configuration
    AOS.init({
       duration: 800,
       easing: "ease-in-out",
       once: true,
       mirror: false,
       anchorPlacement: "top-bottom"
    });
 
    // Add loading animation to images
    document.querySelectorAll("img").forEach((img) => {
       img.addEventListener("load", function () {
          this.classList.add("loaded");
       });
    });
 
    // Enhanced hover effects for cards
    document
       .querySelectorAll(".experience-card, .education-card")
       .forEach((card) => {
          card.addEventListener("mouseenter", function () {
             this.style.transform = "translateX(10px) translateY(-5px)";
          });
 
          card.addEventListener("mouseleave", function () {
             this.style.transform = "translateX(0) translateY(0)";
          });
       });
 });
 