let content = document.getElementById('content');
let checkbox = document.querySelector('#cbx-dark-mode');

const changeThemeBtn = document.querySelector("#changeTheme");

changeThemeBtn.addEventListener("change", function() {
    document.body.classList.toggle("dark");
});