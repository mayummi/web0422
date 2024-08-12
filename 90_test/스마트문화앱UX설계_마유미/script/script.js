window.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector("nav");
    const collapsedMenuIcon = document.querySelector(".collapsedMenuIcon");

    collapsedMenuIcon.onclick = () => {
        btnMotion(event.currentTarget);
    };

    function btnMotion(x) {
        x.classList.toggle("change");

        nav.classList.toggle("change");
    };
});