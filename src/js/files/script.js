// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



const plugin = {}

plugin.popup = function(options) {
    const popup = _createPopup(options)
    return {
        open() {
            popup.classList.add("_active")
        },
        close(){
            popup.classList.remove("_active")
        },
        destroy(){},
    }
}


function _createPopup(options) {
    const popup = document.createElement("div")
    popup.classList.add("my-popup")
    popup.insertAdjacentHTML("beforeend", `
        <div class="my-popup__content">
            <div class="my-popup__header">
                <p class="my-popup__header-title">${options.header}</p>
                <span class="my-popup__header-close ${options.close}">
                    <img src="img/close.svg" alt="">
                </span>
            </div>
            <div class="my-popup__main main-my-popup">
            ${options.main}
            <a href="#" class="my-popup__footer">
                <p class="my-popup__footer-title">${options.footer}</p>
            </a>
        </div>
    `)
    document.body.appendChild(popup)
    return popup
}

let formContent = `
    <div class="main-my-popup-form">
        <div class="main-my-popup-form__title">Заполните все поля и станьте обладателем 
            карты постоянного гостя</div>
        <form action="#" class="main-my-popup-form__form">
            <div class="main-my-popup-form__name-block">
                <img src="img/user.svg" alt="">
                <input type="text" class="main-my-popup-form__name" placeholder="Имя"/>
            </div>
            <div class="main-my-popup-form__surname-block">
                <img src="img/user.svg" alt="">
                <input type="text" class="main-my-popup-form__surname" placeholder="Фамилия"/>
            </div>
            <div class="main-my-popup-form__sex">
                <div class="main-my-popup-form__man">
                    <input class="main-my-popup-form__radio" type="radio" name="radio1" id="man">
                    <label for="man" class="main-my-popup-form__man-text">Мужской</label>
                </div>
                <div class="main-my-popup-form__woman">
                    <input class="main-my-popup-form__radio" type="radio" name="radio1" id="woman">
                    <label for="woman" class="main-my-popup-form__woman-text">Женский</label>
                </div>
            </div>
            <div class="main-my-popup-form__birdth">
                <div class="main-my-popup-form__birth-wrap">
                    <input class="main-my-popup-form__birdth-input" type="number" name="" id="" placeholder="День">
                </div>
                <div class="main-my-popup-form__birth-wrap">
                    <input class="main-my-popup-form__birdth-input" type="text" name="" id="" placeholder="Месяц">
                </div>
                <div class="main-my-popup-form__birth-wrap">
                    <input class="main-my-popup-form__birdth-input" type="number" name="" id="" placeholder="Год">
                </div>
                <div class="main-my-popup-form__birth-wrap main-my-popup-form__birth-wrap-date">
                    <img src="img/calendar.svg" alt="">
                    <input class="main-my-popup-form__birdth-input date" type="text" onfocus="(this.type='date')" name="" id="" placeholder="Дата">
                </div>
            </div>
            <div class="main-my-popup-form__phone">
                <img src="img/phone.svg" alt="">
                <input class="main-my-popup-form__phone-input" type="number" name="" placeholder="Номер телефона">
            </div>
            <div class="main-my-popup-form__email">
                <img src="img/email.svg" alt="">
                <input class="main-my-popup-form__email-input" type="text" placeholder="Email">
            </div>
            <div class="main-my-popup-form__choose">
                <div class="main-my-popup-form__choose-title">Выберите кофейню, в которой вы приобрели карту:</div>
                <div class="main-my-popup-form__select-wrap">
                    <select class="main-my-popup-form__select" name="address" id="">
                        <option class="main-my-popup-form__option" value="address1">Брест, Карбышева, 32</option>
                        <option class="main-my-popup-form__option" value="address2">Брест, Карбышева, 32</option>
                        <option class="main-my-popup-form__option" value="address3">Брест, Карбышева, 32</option>
                        <option class="main-my-popup-form__option" value="address4">Брест, Карбышева, 32</option>
                        <option class="main-my-popup-form__option" value="address5">Брест, Карбышева, 32</option>
                    </select>
                    <img class="main-my-popup-form__select-image" src="img/arrow.svg" alt="">
                </div>
            </div>
            <input class="main-my-popup-form__agree" type="checkbox" id="agree">
            <label class="main-my-popup-form__agree-label" for="agree">Я разрешаю ООО «ПараграфБрест» использовать указанные мной данные в маркетинговых целях.</label>
            <p class="main-my-popup-form__policy-agree">Необходимо согласиться с условиями</p>
        </form>
    </div></div>
`

let userTermsContent = `
    <div class="main-my-popup__info">
        <div class="main-my-popup__info-text1">Карта гостя действует во всех кофейнях сети Paragraph Coffee.
        </div>
        <div class="main-my-popup__info-text-2">Все суммы покупок будут зачисляться на накопительный счет владельца карты.
        </div>
        <div class="main-my-popup__info-text-3">Размер кэшбэка зависит от общей суммы покупок за весь период пользования Картой гостя, сделанных Вами с предъявлением данной карты в сети кофеен Paragraph Coffee, а также партнеров, и начисляется следующим образом:
        </div>
    </div>
    <div class="main-my-popup__table">
        <div class="main-my-popup__table-header header-table">
            <div class="header-table__accumulation">Накопление</div>
            <div class="header-table__cashback">cashback</div>
        </div>
        <div class="main-my-popup__table-content content-table">
            <div class="content-table__money">до 99,99 б.р.</div>
            <div class="content-table__procents">3%</div>
        </div>
        <div class="main-my-popup__table-content content-table">
            <div class="content-table__money">до 99,99 б.р.</div>
            <div class="content-table__procents">5%</div>
        </div>
        <div class="main-my-popup__table-content content-table">
            <div class="content-table__money">до 99,99 б.р.</div>
            <div class="content-table__procents">7%</div>
        </div>
        <div class="main-my-popup__table-content content-table">
            <div class="content-table__money content-table__money-last">до 99,99 б.р.</div>
            <div class="content-table__procents content-table__procents-last">10%</div>
        </div>
    </div>
    <ul class="main-my-popup__list">
        <li class="main-my-popup__item">Соответствующий процент от суммы заносится на бонусный счёт владельца карты сразу же после совершения покупки.
        </li>
    <li class="main-my-popup__item">Баланс накопительного счета можно узнать на личной странице сайта paragraph.by и у сотрудников кофеен.
        </li>
        <li class="main-my-popup__item">Участник программы вправе передавать Карту гостя друзьям и близким, ведь так будет гораздо проще накопить большую сумму на счете.
    </li>
        <li class="main-my-popup__item">В случае потери или порчи карты Вы можете обратиться к сотрудникам любой кофейни сети Paragraph Coffee с просьбой о её восстановлении.
    </li>
        <li class="main-my-popup__item">Стоимость восстановления карты — 3 б.р. </li>
    </ul>
    <div class="main-my-popup__policy">
        <p>ООО «ПараграфБрест» оставляет за собой право в дальнейшем изменять условия программы.</p>
    </div>
`

let formOptions = {
    close: "form-close",
    header: "Анкета гостя",
    main: formContent,
    footer: "Отправить",
}
const formPopup = plugin.popup(formOptions)

let termsOptions = {
    close: "terms-close",
    header: "Условия пользования",
    main: userTermsContent,
    footer: "Спасибо",
}

const termsPopup = plugin.popup(termsOptions)


let info = [
    {
        img: "img/food/1.jpg",
        title: "Торт",
        price: "100г/ 5р",
        description: "Наполеон"
    },
    {
        img: "img/food/2.jpg",
        title: "Печенье",
        price: "100г/ 5р",
        description: "Супер печенье"
    },
    {
        img: "img/food/3.jpg",
        title: "Вафли",
        price: "100г/ 5р",
        description: "Всем нравится"
    },
    {
        img: "img/food/4.jpg",
        title: "Кофе",
        price: "100г/ 5р",
        description: "Натуральные зерна"
    },
    {
        img: "img/food/5.jpg",
        title: "Ягоды",
        price: "100г/ 5р",
        description: "Доступно для всех"
    },
    {
        img: "img/food/6.jpg",
        title: "Чай",
        price: "100г/ 5р",
        description: "Отборные ингридиенты"
    },
    {
        img: "img/food/7.jpg",
        title: "Пирог",
        price: "100г/ 5р",
        description: "Норм"
    },
    {
        img: "img/food/8.jpg",
        title: "Булка",
        price: "100г/ 5р",
        description: "Из Италии"
    },
    {
        img: "img/food/9.jpg",
        title: "Мороженое",
        price: "100г/ 5р",
        description: "Натуральный продукт"
    },
]


function productOpener() {
    let productPopup = document.querySelector(".product-popup")
    productPopup.classList.add("_active")
}

let product = document.querySelector(".food__wrapper")
if (product) {
    product.onclick = function(e) {
        let target = e.target
        if (target.innerHTML.length > 50) return;
        let newSrc = info[target.dataset.id - 1].img
        let images = document.querySelectorAll(".popup-image")
        for (let img of images) {
            img.src = newSrc
        }
        let productTitlle = document.querySelector(".info-product-popup__title")
        let productPrice = document.querySelector(".info-product-popup__price")
        let productDescription = document.querySelector(".info-product-popup__description")
        productTitlle.innerHTML = info[target.dataset.id - 1].title
        productPrice.innerHTML = info[target.dataset.id - 1].price
        productDescription.innerHTML = info[target.dataset.id - 1].description
        productOpener()
        let productPopup = document.querySelector(".product-popup")
        if (productPopup.classList.contains("_active")) {
            let closable = document.querySelector(".product-popup__close")
            closable.addEventListener("click", productCloser)
        }
        if (!target.classList.contains("food-slide")) return
    }
}


//закрыть попап продукта
function productCloser() {
    let productPopup = document.querySelector(".product-popup")
    productPopup.classList.remove("_active")
}
//закрыть-открыть
let formPopupOpener = (e) => {
    formPopup.open()
    e.preventDefault()
}
let formPopupCloser = (e) => {
    formPopup.close()
}
let termsPopupOpener = (e) => {
    termsPopup.open()
    e.preventDefault()
}
let termsPopupCloser = (e) => {
    termsPopup.close()
}


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


//открыть попап с формой
let guest = document.querySelector(".guest-popup")
if (guest) {
    guest.addEventListener("click", formPopupOpener)
}


//закрыть попап с формой
let crossButton = document.querySelector(".form-close")
crossButton.addEventListener("click", formPopupCloser)
let sendButton = document.querySelector(".my-popup__footer")
sendButton.addEventListener("click", formPopupCloser)

//открытие попапа условий пользования
let userTerms = document.querySelector(".sub-info-footer__powered")
userTerms.addEventListener("click", termsPopupOpener)

//закрытие попапа условий пользования
let termsClose = document.querySelector(".terms-close")
termsClose.addEventListener("click", termsPopupCloser)
//открыть попап с продуктом
//дропдаун с адресами
let addressArrow = document.querySelector(".main-my-popup-form__select")
addressArrow.addEventListener("click", function(){
    let addressArrow = document.querySelector(".main-my-popup-form__select-image")
    addressArrow.classList.toggle("_active")
})
   


