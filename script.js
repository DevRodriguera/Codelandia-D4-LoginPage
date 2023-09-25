let checkbox = document.querySelector('#cbx-dark-mode');
let lb = document.querySelector(".single-input")

const changeThemeBtn = document.querySelector("#changeTheme");

changeThemeBtn.addEventListener("change", function() {
    document.body.classList.toggle("dark");
    lb.classList.toggle("dark");
});