const dropdowns = document.querySelectorAll(".nav__item--dropdown");
// console.log(dropdowns);

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
        const button = e.target.closest(".nav__item--dropdown");
        if(!button) {
            return;
        }

        button.classList.toggle("show");
    });
});