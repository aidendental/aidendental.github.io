window.addEventListener("hashchange", function () {
  var whitening = false;
  alert("here");

  if (window.location.href == "http://127.0.0.1:5500/index.html") {
    whitening = false;
  }

  if (
    window.location.href == "http://127.0.0.1:5500/aesthetic-therapy.html" &&
    whitening
  ) {
    const tabs = document.querySelectorAll("[data-tab-target]")[1];
  }
});

function clickWhitening() {
  whitening = true;
}
