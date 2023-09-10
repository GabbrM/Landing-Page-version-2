const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll(".nav__link");
const nav = document.querySelector("#nav");
const _abrir = document.querySelector("#abrir")
const _cerrar = document.querySelector("#cerrar")

_abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})

_cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})

navLink.forEach(link =>{
    link.addEventListener("click", () =>{
        navMenu.classList.add('hidden')
    })
})

closeIcon.addEventListener("click", () =>{
    navMenu.classList.add('hidden')
})

hamburger.addEventListener("click", () =>{
    navMenu.classList.remove('hidden')
})

