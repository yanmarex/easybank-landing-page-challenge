const btn = document.querySelector("#btn");
const navbar = document.querySelector("#navbar");

btn.addEventListener("click", function() {
    navbar.classList.toggle('is-hidden');
});