let searchBtn = document.querySelector(".search-icon");
let searchInput = document.querySelector(".search-input");
// ---სერჩ ღილაკის სტილიზაცია
let clickCounter = 0;
searchBtn.addEventListener("click", function () {
  searchInput.classList.toggle("width");
  searchInput.style.transition = "width 1s";
});
// -------------------------------------------
let userPasswordInput = document.querySelector(".second-input-box input");
let userPasswordBox = document.querySelector(".second-input-box");
let userNameInput = document.querySelector(".first-input-box input");
let userNameBox = document.querySelector(".first-input-box");
let forgotPass = document.querySelector(".forgot-pass");
let signupBoxTitle = document.querySelector(".sign-up-box-title");
let submitBtn = document.querySelector(".submit-btn");
let createdAccount = document.querySelector(".after-creating-account");
// -------Registration window
setInterval(function () {
  if (
    (userNameInput.value.length >= 6) &
    (userPasswordInput.value.length >= 6)
  ) {
    submitBtn.style.backgroundColor = "#1473E6";
  }
  if (userNameInput.value.length < 6) {
    submitBtn.style.backgroundColor = "#D6D6D6";
  }
  if (userPasswordInput.value.length < 6) {
    submitBtn.style.backgroundColor = "#D6D6D6";
  }
}, 100);
submitBtn.addEventListener("click", function () {
  if (
    (userNameInput.value.length >= 6) &
    (userPasswordInput.value.length >= 6)
  ) {
    userNameBox.style.display = "none";
    userPasswordBox.style.display = "none";
    submitBtn.style.display = "none";
    signupBoxTitle.style.display = "none";
    forgotPass.style.display = "none";
    createdAccount.style.display = "block";
  }
  if (userNameInput.value.length < 6) {
    userNameInput.style.border = "1px solid red";
    alert("Fill username input!Minimum 6 symbols!");
  }
  if (userPasswordInput.value.length < 6) {
    userPasswordInput.style.border = "1px solid red";
    alert("Fill password input!Minimum 6 symbols!");
  }
});
// ---------------------------
let scrollDownBtn = document.querySelector(".scroll-down img");
let container = document.querySelector(".container");
// -------Scroll down button
console.log(document.documentElement.scrollTop);
scrollDownBtn.addEventListener("click", function () {
  document.documentElement.scrollTop += 2700;
});
// ----------------------Our Work buttons
let all = document.querySelector(".all");
let blockchain = document.querySelector(".blockchain");
let fintech = document.querySelector(".fintech");
let neobank = document.querySelector(".neobank");
let ai = document.querySelector(".ai");
let blockchainCard = document.querySelector(".blockchain-card");
let fintechCard = document.querySelector(".fintech-card");
let neobankCard = document.querySelector(".neobank-card");
let aiCard = document.querySelector(".ai-card");
all.addEventListener("click", function () {
  blockchainCard.style.display = "block";
  fintechCard.style.display = "block";
  aiCard.style.display = "block";
  neobankCard.style.display = "block";
});
blockchain.addEventListener("click", function () {
  blockchainCard.style.display = "block";
  fintechCard.style.display = "none";
  aiCard.style.display = "none";
  neobankCard.style.display = "none";
});
fintech.addEventListener("click", function () {
  aiCard.style.display = "none";
  neobankCard.style.display = "none";
  blockchainCard.style.display = "none";
  fintechCard.style.display = "block";
});
neobank.addEventListener("click", function () {
  aiCard.style.display = "none";
  neobankCard.style.display = "block";
  blockchainCard.style.display = "none";
  fintechCard.style.display = "none";
});
ai.addEventListener("click", function () {
  aiCard.style.display = "block";
  neobankCard.style.display = "none";
  blockchainCard.style.display = "none";
  fintechCard.style.display = "none";
});
// -------------------------Testimonials Opacity animation
let card = document.getElementsByClassName("card");
console.log(card);
window.addEventListener("scroll", function () {
  if (this.scrollY >= 1700) {
    card[0].style.opacity = "1";
    card[1].style.opacity = "1";
    card[2].style.opacity = "1";
    card[3].style.opacity = "1";
  }
  if (this.scrollY < 1700) {
    card[0].style.opacity = "0";
    card[1].style.opacity = "0";
    card[2].style.opacity = "0";
    card[3].style.opacity = "0";
  }
});
// -----------scroll up
let scrollUpBtn = document.querySelector(".scroll-up-btn");
scrollUpBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
// --------the plan card hide functional
let planCard = document.querySelector(".the-plan-card");
let planIconBtn = document.querySelectorAll(".the-plan-card-icon-box");
planIconBtn.forEach((element) => {
  element.addEventListener("click", function () {
    clickCounter++;
    if (clickCounter % 2 != 0) {
      element.parentElement.querySelector(".the-plan-card-info").style.display =
        "flex";
      element.parentElement.classList.toggle("height");
    }
    if (clickCounter % 2 == 0) {
      element.parentElement.classList.toggle("height");
      element.parentElement.querySelector(".the-plan-card-info").style.display =
        "none";
    }
  });
});
// --------------------------our - team photos functional
let data = [
  {
    img: "https://images.unsplash.com/photo-1667829186138-55120b70d731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    fullname: "Sebastian Bennett",
    position: "Founder",
    mediaFacebook: "./images/facebook1.png",
    mediaTwitter: "./images/twitter1.png",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1667222138752-4dac8aae7f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    fullname: "Graham Griffiths",
    position: "Manager",
    mediaFacebook: "./images/facebook1.png",
    mediaTwitter: "./images/twitter1.png",
  },
  {
    img: "https://images.unsplash.com/photo-1667874382127-a3639d6c9964?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    fullname: "Monica Bottger",
    position: "Designer",
    mediaFacebook: "./images/facebook1.png",
    mediaTwitter: "./images/twitter1.png",
  },
  {
    img: "https://images.unsplash.com/photo-1667723457637-c7e3c9b8b903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    fullname: "Leona Hurt",
    position: "Developer",
    mediaFacebook: "./images/facebook1.png",
    mediaTwitter: "./images/twitter1.png",
  },
];

let teamMembersBox = document.querySelector(".team-members");
data.forEach((element) => {
  let teamMemberPhoto = teamMembersBox.appendChild(
    document.createElement("div")
  );
  teamMemberPhoto.style.backgroundImage = `url(${element.img})`;
  teamMemberPhoto.style.cursor = "pointer";
  teamMemberPhoto.style.width = "100px";
  teamMemberPhoto.style.height = "100px";
  teamMemberPhoto.style.backgroundSize = "cover";
  teamMemberPhoto.style.backgroundPosition = "center";
  teamMemberPhoto.style.borderRadius = "50%";
  let teamMembersInfoBox = teamMembersBox.appendChild(
    document.createElement("div")
  );
  teamMembersInfoBox.style.display = "flex";
  teamMembersInfoBox.style.flexDirection = "column";
  teamMembersInfoBox.style.justifyContent = "space-between";
  teamMembersInfoBox.style.alignItems = "center";
  teamMembersInfoBox.style.width = "50px";
  teamMembersInfoBox.style.height = "100px";
  teamMembersInfoBox.style.marginLeft = "-10px";
  let teamMembersInfoName = teamMembersInfoBox.appendChild(
    document.createElement("p")
  );
  teamMembersInfoName.innerText = element.fullname;
  teamMembersInfoName.style.fontWeight = "bold";
  teamMembersInfoName.style.fontSize = "20px";
  let teamMembersInfoPosition = teamMembersInfoBox.appendChild(
    document.createElement("p")
  );
  teamMembersInfoPosition.innerText = element.position;

  let mediaContainer = document.createElement("div");
  teamMembersInfoBox.appendChild(mediaContainer);
  let teamMembersInfoMediaFacebook = mediaContainer.appendChild(
    document.createElement("a")
  );
  let teamMembersInfoMediaFacebookImg =
    teamMembersInfoMediaFacebook.appendChild(document.createElement("img"));
  teamMembersInfoMediaFacebook.href = `https://facebook.com`;
  teamMembersInfoMediaFacebookImg.src = `${element.mediaFacebook}`;

  let teamMembersInfoMediaTwitter = mediaContainer.appendChild(
    document.createElement("a")
  );
  let teamMembersInfoMediaTwitterImg = teamMembersInfoMediaTwitter.appendChild(
    document.createElement("img")
  );
  teamMembersInfoMediaTwitter.href = `https://twitter.com`;
  teamMembersInfoMediaTwitterImg.src = `${element.mediaTwitter}`;
  teamMembersInfoMediaTwitter.style.marginLeft = "10px";

  let largeIconBox = document.querySelector(".team-member-large-icon");

  teamMemberPhoto.addEventListener("click", function () {
    largeIconBox.style.backgroundImage = `url(${element.img})`;
    largeIconBox.style.display = "block";
  });
});
