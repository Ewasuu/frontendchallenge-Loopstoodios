'use strict'

const menuOpenBtn = document.querySelector('.burguer__btn')
const menuCloseBtn = document.querySelector('.close__btn')

const header = document.querySelector('.main__header')
const headerMenu = document.querySelector('.menu__header')


menuOpenBtn.addEventListener('click', ()=>{
    window.scroll(0, 0)
    header.style.animation = 'goAway .6s linear'
    headerMenu.style.display = 'flex'
    headerMenu.style.animation = 'growIn .6s linear'
    document.body.style.overflow = 'hidden'
    setTimeout(()=>{
        header.style.display = "none"
    }, 600)


})
menuCloseBtn.addEventListener('click', ()=>{
    header.style.animation = 'goBack .6s linear'
    header.style.display = 'flex'
    headerMenu.style.animation = 'growOut .2s linear'
    document.body.style.overflow = 'auto'
   setTimeout(()=>{
    headerMenu.style.display = 'none'
   }, 200)
})
