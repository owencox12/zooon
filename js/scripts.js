let menu = document.querySelectorAll(".racions__item_block span")

menu.forEach(function(e){
    e.addEventListener("click", function(event){
        menu.forEach(function(e){
            console.log(e.classList.contains("racions__item_block_vote"))
            e.classList.remove("racions__item_block_vote_active")
        })
        if (event.target.classList.contains("racions__item_block_vote")) {
            event.target.classList.add("racions__item_block_vote_active")
        }
    })
})

let questions = document.querySelectorAll(".questions__item_block")
questions.forEach(function(e){
    e.addEventListener("click", function(e){
        if (e.target.classList.contains("questions__item_plus")) {
            e.target.classList.toggle("questions__item_plus_hide")
            toggleItem(e.target)
        }
    })
})

function toggleItem(ask) {
    let answer = ask.parentNode
    answer = answer.parentNode.querySelector(".questions__item_block_descr")
    if (answer.classList.contains("questions__item_block_descr_active")) {
        let animate = answer.animate([{ opacity: 1 },{ opacity: 0 }], {
       duration: 400
        });
            animate.addEventListener("finish", function(){
                answer.classList.remove("questions__item_block_descr_active")
            })
    } else {
        answer.classList.add("questions__item_block_descr_active")
    }
}


let btnUp = document.querySelector(".arrowUp")

window.addEventListener("scroll", function(){
    if (scrollY > 700) {
        document.querySelector(".arrowUp").classList.add("arrowUp_active")
    } else {
        document.querySelector(".arrowUp").classList.remove("arrowUp_active")
    }
})
btnUp.addEventListener("click", function() {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    })
})

let headerMenu = document.querySelector(".header__menu")
console.log(headerMenu)

headerMenu.addEventListener("click", function(e){
    let link = e.target
    if (link.dataset.id) {
        // console.log(e.target)
        e.preventDefault();
        let target = document.querySelector(link.hash)
        let pos = target.offsetTop - 110
        console.log(pos)
        window.scrollTo ({
            top: pos,
            behavior: "smooth"
        })
    }
})


window.onscroll = () => {
    if (scrollY > 50) {
        document.querySelector(".promo__header").classList.add("promo__header_active")
    } else {
        document.querySelector(".promo__header").classList.remove("promo__header_active")
    }
}

let burger = document.querySelector(".header__burger")

burger.addEventListener("click", function(){
    document.querySelector(".header__menu").classList.toggle("header__menu_active")
    document.querySelector(".header__burger").classList.toggle("header__burger_active")
    document.querySelector("body").classList.toggle("lock")
})