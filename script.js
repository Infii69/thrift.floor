// JavaScript for Interactivity
document.addEventListener("DOMContentLoaded", () => {
    // Toggle Navigation Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // "Shop Now" Button Interaction
    const shopButton = document.querySelector(".hero button");
    shopButton.addEventListener("click", () => {
        alert("Welcome! Explore our collection to find unique treasures.");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! We'll get back to you shortly.");
        form.reset(); // Clear the form
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});

