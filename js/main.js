let searchBtn = document.querySelector(".search-icon")
let searchInput = document.querySelector(".search-input")
// ---სერჩ ღილაკის სტილიზაცია
let clickCounter = 0
searchBtn.addEventListener("click",function(){
searchInput.classList.toggle("width");
searchInput.style.transition = "width 1s";
})
// -------------------------------------------
let userPasswordInput = document.querySelector(".second-input-box input")
let userPasswordBox = document.querySelector(".second-input-box")
let userNameInput = document.querySelector(".first-input-box input")
let userNameBox = document.querySelector(".first-input-box")
let forgotPass = document.querySelector(".forgot-pass")
let signupBoxTitle = document.querySelector(".sign-up-box-title")
let submitBtn = document.querySelector(".submit-btn")
let createdAccount = document.querySelector(".after-creating-account")
// -------Registration window
setInterval(function(){
    if (userNameInput.value.length >= 6 & userPasswordInput.value.length >= 6 ){
        submitBtn.style.backgroundColor = "#1473E6";}
    if (userNameInput.value.length < 6){
        submitBtn.style.backgroundColor = "#D6D6D6"
    }
    if (userPasswordInput.value.length < 6 ){
        submitBtn.style.backgroundColor = "#D6D6D6"
    }
},100)
submitBtn.addEventListener("click",function(){
    if (userNameInput.value.length >= 6 & userPasswordInput.value.length >= 6 ){
        userNameBox.style.display = "none";
        userPasswordBox.style.display = "none";
        submitBtn.style.display = "none";
        signupBoxTitle.style.display= "none";
        forgotPass.style.display= "none";
        createdAccount.style.display="block"
    }
    if (userNameInput.value.length < 6){
        userNameInput.style.border = "1px solid red";
        alert("Fill username input!Minimum 6 symbols!")
    }
    if (userPasswordInput.value.length < 6){
        userPasswordInput.style.border = "1px solid red";
        alert("Fill password input!Minimum 6 symbols!")
    }
})
// ---------------------------
let scrollDownBtn = document.querySelector(".scroll-down img")
let container = document.querySelector(".container")
// -------Scroll down button
scrollDownBtn.addEventListener("click",function(){
    document.documentElement.scrollTop += 3050
})
// ----------------------Our Work buttons
let all = document.querySelector(".all")
let blockchain =  document.querySelector(".blockchain")
let fintech = document.querySelector(".fintech")
let neobank =  document.querySelector(".neobank")
let ai = document.querySelector(".ai")
let blockchainCard = document.querySelector(".blockchain-card")
let fintechCard = document.querySelector(".fintech-card")
let neobankCard = document.querySelector(".neobank-card")
let aiCard = document.querySelector(".ai-card")
all.addEventListener("click",function(){
    blockchainCard.style.display = "block"
    fintechCard.style.display = "block"
    aiCard.style.display = "block"
    neobankCard.style.display = "block"
})
blockchain.addEventListener("click",function(){
    blockchainCard.style.display = "block"
    fintechCard.style.display = "none"
    aiCard.style.display = "none"
    neobankCard.style.display = "none"
})
fintech.addEventListener("click",function(){
    aiCard.style.display = "none"
    neobankCard.style.display = "none"
    blockchainCard.style.display = "none"
    fintechCard.style.display = "block"
})
neobank.addEventListener("click",function(){
    aiCard.style.display = "none"
    neobankCard.style.display = "block"
    blockchainCard.style.display = "none"
    fintechCard.style.display = "none"
})
ai.addEventListener("click",function(){
    aiCard.style.display = "block"
    neobankCard.style.display = "none"
    blockchainCard.style.display = "none"
    fintechCard.style.display = "none"
})
// -------------------------Testimonials Opacity animation
let card = document.getElementsByClassName("card")
console.log(card)
window.addEventListener("scroll",function(){
    if(this.scrollY >= 1700){
 card[0].style.opacity = "1"
 card[1].style.opacity = "1"
 card[2].style.opacity = "1"
 card[3].style.opacity = "1"
}
if (this.scrollY < 1700){
    card[0].style.opacity = "0"
    card[1].style.opacity = "0"
    card[2].style.opacity = "0"
    card[3].style.opacity = "0"
}
})
