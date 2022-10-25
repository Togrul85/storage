

let username = document.querySelector("#username");
let pass = document.querySelector("#pass");
let btn = document.querySelector(".btn");
let welcome = document.querySelector(".start");
let welcomeNew = document.querySelector(".start h1");
let form = document.querySelector(".form");
let logout = document.querySelector(".logout");

let localUser = JSON.parse(localStorage.getItem("login"));



if (localStorage.getItem("login")) {
  New.style.display = "block";
  form.style.display = "none";
  welcome.innerText += " " + localUser.username;
} 


else {

  welcome.style.display = "none";
  form.style.display = "block";
}

console.log(localUser);
let userAdmin;
let pas;


btn.addEventListener("click",  function() {
  
  if (username.value === "togrul" && pass.value ==="123") {
    console.log(username.value);
  }
});



logout.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("login");
});





