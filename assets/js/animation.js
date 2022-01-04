var doctorPosition;
var locationPosition;
let marginOffset = 430;

window.addEventListener("load", function () {
  doctorPosition = document
    .getElementById("doctor-wrapper")
    .getBoundingClientRect().top;

  locationPosition = document
    .getElementById("location")
    .getBoundingClientRect().top;

  document.getElementById("main-text").style.opacity = 0;
  document.getElementById("doctor").style.opacity = 0;
  document.getElementById("history").style.opacity = 0;
  document.getElementById("locationText").style.opacity = 0;

  let cardHolder = document.getElementsByClassName("scrolling-wrapper-flexbox");
  let cardHolderWidth = cardHolder.scrollWidth;

  //alert(cardHolderWidth);
  let cards = document.getElementsByClassName("card");

  cardHolder.scrollLeft = 300;
  var i = 0;
});

window.addEventListener("scroll", function () {
  if (doctorPosition <= window.scrollY + marginOffset) {
    document.getElementById("main-text").style.opacity = 1;
    document.getElementById("doctor").style.opacity = 1;
    document.getElementById("history").style.opacity = 1;
    document
      .getElementById("main-text")
      .classList.add("animate__animated", "animate__slideInUp");
    document
      .getElementById("doctor-image")
      .classList.add("animate__animated", "animate__pulse");
    document
      .getElementById("autograph")
      .classList.add("animate__animated", "animate__pulse");
    document
      .getElementById("doctor")
      .classList.add("animate__animated", "animate__fadeIn");
    document
      .getElementById("history")
      .classList.add("animate__animated", "animate__fadeIn");
  }

  if (locationPosition <= window.scrollY + marginOffset) {
    document.getElementById("locationText").style.opacity = 1;
    document
      .getElementById("locationText")
      .classList.add("animate__animated", "animate__slideInRight");
  }
});
