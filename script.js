document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const nav = document.querySelector("nav");

    navToggle.addEventListener("change", () => {
        nav.classList.toggle("nav-open");
    });
});