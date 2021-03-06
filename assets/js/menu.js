var allElements = document.getElementsByTagName("*");
Array.prototype.forEach.call(allElements, function (el) {
  var includePath = el.dataset.includePath;
  if (includePath) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        el.outerHTML = this.responseText;
      }
    };
    xhttp.open("GET", includePath, true);
    xhttp.send();
  }
});

window.addEventListener("load", function () {
  window.kakaoAsyncInit = function () {
    Kakao.Channel.createChatButton({
      container: "#kakao-talk-channel-chat-button",
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://developers.kakao.com/sdk/js/kakao.channel.min.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "kakao-js-sdk");

  var header = document.querySelector("#my-header");
  var ratio;
  if (isMobile) {
    ratio = 0.6;
  } else {
    ratio = 0.9;
  }
  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight * ratio) {
      header.style.setProperty("background-color", "white");
    } else {
      header.style.setProperty("background-color", "transparent");
    }
  });
});

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
