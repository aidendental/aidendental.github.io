var doctorPosition;

window.addEventListener("load", function () {
  doctorPosition = document
    .getElementById("doctor-wrapper")
    .getBoundingClientRect().top;
});

window.addEventListener("scroll", function () {
  if (doctorPosition <= window.scrollY + 300) {
    document
      .getElementById("main-text")
      .classList.add("animate__animated", "animate__slideInUp");
    document
      .getElementById("doctor-image")
      .classList.add("animate__animated", "animate__pulse");
    document
      .getElementById("doctor")
      .classList.add("animate__animated", "animate__fadeIn");
    document
      .getElementById("history")
      .classList.add("animate__animated", "animate__fadeIn");
  }
});
