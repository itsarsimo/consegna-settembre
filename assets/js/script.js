console.log("Prova collegamento script");

const btn = document.querySelector(".hamburger-button");
const body = document.querySelector("body");

btn.addEventListener("click", () =>{
    body.classList.toggle("open-menu");
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("image-carousel");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// let card = document.querySelector('.card-box-small');

// card.addEventListener('click', function() {
  
//   if(card.classList.contains('active')) { 
//     card.classList.remove('active');
//   }
//   else {
//     card.classList.add('active');
//   }
// });