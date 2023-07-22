let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".closeBtn");
let searchBar = document.querySelector(".search-bar");
let nav = document.querySelector("nav");
let menuToggle = document.querySelector(".menu-toggle");
let navItems = document.querySelector(".nav-items")

searchBtn.addEventListener("click",()=>{
    searchBar.classList.add('active')
    closeBtn.classList.add('active')
    searchBtn.classList.add('active')
    menuToggle.classList.add('hide')
    nav.classList.remove('open')
})

closeBtn.addEventListener("click",()=>{
    searchBar.classList.remove('active')
    closeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    menuToggle.classList.remove('hide')
})

menuToggle.addEventListener("click",()=>{
    nav.classList.toggle('open')
    closeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    menuToggle.classList.remove('hide')
})