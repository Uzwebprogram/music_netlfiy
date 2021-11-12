let menu = document.querySelector(".menu"),
    header = document.querySelector(".header"),
    body = document.querySelector("body")
const nav__menu = document.querySelector(".nav__menu")
const items = document.querySelectorAll(".item")
const navbar__hamburger  = document.querySelector(".navbar__hamburger ")
let chiq = document.querySelector(".item")
// console.log(navb)
menu.addEventListener("click", function() {
    header.classList.toggle("header-open")
    nav__menu.classList.toggle("active-menu")
    // navbar__hamburger.classList.toggle("active-menu")
});
for(let i = 0; i < items.length; i++){
    items[i].addEventListener("click", (evt) => {
        header.classList.remove("header-open")
        nav__menu.classList.remove("active-menu")
    })
}