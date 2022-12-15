// Hamburger menu start
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
// Hamburger end
// input field start
const searchh = document.querySelector('.search');
const input = document.querySelector('.input-field');
searchh.addEventListener("click", inputField);

function inputField() {
    input.classList.toggle("active");
    searchh.classList.toggle("active")
}
// input field end
// carousel start
$(document).ready(function () {
    $("#brand").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        dots: true,
        loop:true,
        items: 4,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            479:{
                items:2,
            },
            767:{
                items:4,
            }
        }
    });
});
// carousel end