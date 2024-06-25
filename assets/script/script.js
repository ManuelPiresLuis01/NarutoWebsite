var btnMenu =document.querySelector(".icon-menu-mobile")
var overflow =document.querySelector(".overflow")
var Menu =document.querySelector(".mobile")

btnMenu.addEventListener('click',()=>{
    Menu.classList.add("abrir")
    overflow.classList.add("abrir")
})

Menu.addEventListener('click',()=>{
    Menu.classList.remove("abrir")
    overflow.classList.remove("abrir")
})

overflow.addEventListener('click',()=>{
    Menu.classList.remove("abrir")
    overflow.classList.remove("abrir")
})
