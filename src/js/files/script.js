// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



window.onload = function() {
    let activeTown = document.querySelector(".towns-header__active")
    activeTown.addEventListener("click", function(){
        activeTown.classList.toggle("_active")
    })
    let bodyElement = document.querySelector("body")
    let navMenu = document.querySelector(".header__nav-menu")
    let layer = document.querySelector(".layer")
    let burgerMenu = document.querySelector(".icon-menu")
    burgerMenu.addEventListener("click", function(){
        navMenu.classList.add("_active")
        layer.classList.add("__active")
        bodyElement.classList.add("_active")
       
    })

    let closeButton = document.querySelector(".__cross")
    closeButton.addEventListener("click", function() {
        layer.classList.remove("__active")
        navMenu.classList.remove("_active")
        bodyElement.classList.remove("_active")
    })

    let navButton = document.querySelector("")

}