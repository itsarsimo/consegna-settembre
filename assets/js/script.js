console.log("Prova collegamento script");

const btn = document.querySelector(".hamburger-button");
const body = document.querySelector("body");

btn.addEventListener("click", () =>{
    body.classList.toggle("open-menu");
});