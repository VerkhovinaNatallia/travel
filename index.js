"use strict"

window.addEventListener('DOMContentLoaded', (e) => {
    const list = document.querySelector('.header__nav_list');
    const burger = document.querySelector('.wrapper_burger');
    const header = document.querySelector('.header');
    const blackout = document.querySelector('.blackout');
    const body = document.querySelector('body');
    const arrLinks = list.querySelectorAll('a');

    burger.addEventListener("click", (event) => {
        burger.classList.toggle('wrapper_burger_active');
        list.classList.toggle('header__nav_list_active');
        header.classList.toggle('header_active');
        blackout.classList.toggle('blackout_active');
        body.classList.toggle('body_active');
    });

    blackout.addEventListener("click", (event) => {
        console.log(event.target);
        burger.classList.toggle('wrapper_burger_active');
        list.classList.toggle('header__nav_list_active');
        header.classList.toggle('header_active');
        blackout.classList.toggle('blackout_active');
        body.classList.toggle('body_active');
    });

    arrLinks.forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.toggle('wrapper_burger_active');
            list.classList.toggle('header__nav_list_active');
            header.classList.toggle('header_active');
            blackout.classList.toggle('blackout_active');
            body.classList.toggle('body_active');
        });
    });

});