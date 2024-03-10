let burger = document.querySelector(".burger");
let overlay = document.querySelector(".overlay");
let menu = document.querySelector(".menu");
let cross = document.querySelector(".cross");
let closeBurger = document.querySelectorAll(".nav");

burger.addEventListener('click', function(){
    if(burger.classList.contains("active")) {
          burger.classList.remove('active');
          overlay.classList.remove('active');
          menu.classList.remove('active');
     }else {
         burger.classList.add('active');
         overlay.classList.add('active');
         menu.classList.add('active');
     }
 })

 overlay.addEventListener('click', function(){
    menu.classList.remove('active');
    overlay.classList.remove('active');
    burger.classList.remove('active');
 })
 cross.addEventListener('click', function(){
  menu.classList.remove('active');
  overlay.classList.remove('active');
  burger.classList.remove('active');
})

let items = closeBurger;

// слушатель клика 
for (let item of items) {
  item.addEventListener('click', function() {
    burger.classList.remove('active');
    overlay.classList.remove('active');
    menu.classList.remove('active');
  })
}