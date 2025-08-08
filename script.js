// Auto update year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.querySelector(".footer").classList.toggle("light");
});
