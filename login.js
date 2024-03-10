
let login = document.querySelector(".login");
let account = document.querySelector(".account");
let overlayLogin = document.querySelector(".overlay-login");
let loginPopup = document.querySelector(".login-popup");
let register = document.querySelector(".register");
let logIn = document.querySelector(".log-in");
let loginButton = document.querySelector(".login-button-js");

let loginEnter = document.querySelector(".login-enter");

account.addEventListener('click', function() {
  overlayLogin.classList.add('active');
  loginPopup.classList.add('active');
})

login.addEventListener('click', function() {
         overlayLogin.classList.add('active');
         loginPopup.classList.add('active');
 })

 overlayLogin.addEventListener('click', function() {
    loginPopup.classList.remove('active');
    overlayLogin.classList.remove('active');
 })

 register.addEventListener('click', function() {
  document.querySelector(".login-enter").classList.remove('active');
  document.querySelector(".login-enter1").classList.remove('active');
  document.querySelector(".login-enter2").classList.remove('active');
  document.querySelector(".login-register").classList.add('active');
  document.querySelector(".login-register1").classList.add('active');
  document.querySelector(".login-register2").classList.add('active');
 })

 logIn.addEventListener('click', function() {
  document.querySelector(".login-enter").classList.add('active');
  document.querySelector(".login-enter1").classList.add('active');
  document.querySelector(".login-enter2").classList.add('active');
  document.querySelector(".login-register").classList.remove('active');
  document.querySelector(".login-register1").classList.remove('active');
  document.querySelector(".login-register2").classList.remove('active');
 })


 loginButton.addEventListener('click', function() {
  let loginValue = document.getElementById('login').value;
  let passwordValue = document.getElementById('password').value;
  alert(`Login: ${loginValue} \n Password: ${passwordValue}`);
 })

