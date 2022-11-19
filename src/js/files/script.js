// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



window.onload = function() {
    let activeTown = document.querySelector(".towns-header__active")
    activeTown.addEventListener("click", function(){
        activeTown.classList.toggle("_active")
    })
    let headerElement = document.querySelector(".header")
    let bodyElement = document.querySelector("body")
    let navMenu = document.querySelector(".header__nav-menu")
    let layer = document.querySelector(".layer")
    let burgerMenu = document.querySelector(".icon-menu")
    burgerMenu.addEventListener("click", function(){
        navMenu.classList.add("_active")
        layer.classList.add("__active")
        bodyElement.classList.add("_active")
        headerElement.classList.add("_active")
       
    })

    let closeButton = document.querySelector(".__cross")
    closeButton.addEventListener("click", function() {
        layer.classList.remove("__active")  
        navMenu.classList.remove("_active")
        bodyElement.classList.remove("_active")
        headerElement.classList.remove("_active")
    })


   $(".table-bonuses__content").click(function(){
        if ($(".table-bonuses").hasClass("one")) {
            $(".table-bonuses__content").not($(this)).removeClass("_active")
            $(".table-bonuses__content").not($(this)).children(".table-bonuses__arrow").removeClass("_active")
            $(".table-bonuses__spoller").not($(this).next()).slideUp(0)
            
        }
        $(this).toggleClass("_active").next().slideToggle(0)
        $(this).children(".table-bonuses__arrow").toggleClass("_active")
    })
}