
let menu = document.querySelector('#menu')

let menu2 = document.querySelector('.menu2')
let menu3 = document.querySelector('.menu3')

let toggleMenu = document.querySelector('#openMenu')
toggleMenu.addEventListener('click',()=>{
        menu.classList.toggle('active')
        menu2.classList.toggle('active')
        menu3.classList.toggle('active')
})
toggleMenu.addEventListener('click',()=>{
    toggleMenu.classList.toggle('active')
})