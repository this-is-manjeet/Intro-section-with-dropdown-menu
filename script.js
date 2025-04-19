const closeSidebar = document.getElementById("close-sidebar");
const openSidebar  = document.getElementById("open-sidebar");
const navbar = document.querySelector(".nav");

closeSidebar.addEventListener("click", () => {
    navbar.classList.remove("show");
});

openSidebar.addEventListener("click", () => {
    navbar.classList.add("show");
});