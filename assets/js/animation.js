window.addEventListener("load", function () {
  var selector = "#treatment-subject-text";
  var intersectionOptions = {
    root: null, // use the viewport
    rootMargin: "0px",
    threshold: 1.0,
  };

  // 진료과목 움직이기
  // 보일 때에만 움직이게 하면 setInterval queue에 이미 들어간 명령 때문에 버벅거려서
  // 그냥 로드되고 계속 움직이게 해뒀습니다.
  var cardHolder = document.getElementsByClassName(
    "scrolling-wrapper-flexbox"
  )[0];
  var cards = document.getElementsByClassName("cardImg");
  var cardNum = cards.length;

  let scrollWidth = cardHolder.scrollWidth / cardNum;
  var count = 0;

  self.setInterval(() => {
    if (count != cardNum) {
      if (count == 3) {
        cards[count].classList.add(
          "animate__animated",
          "animate__pulseForSmile"
        );
      } else {
        cards[count].classList.add("animate__animated", "animate__pulse");
      }

      self.setTimeout(() => {
        cardHolder.scrollBy({
          left: scrollWidth,
          top: 0,
          behavior: "smooth",
        });
      }, 2000);

      ++count;
    } else {
      cardHolder.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
      count = 0;
      var i = 0;
      for (; i < cardNum; ++i) {
        cards[i].classList.remove(
          "animate__animated",
          "animate__pulse",
          "animate__pulseForSmile"
        );
      }
    }
  }, 2500);

  function intersectionCallback(entries, observer) {
    entries.forEach((entry) => {
      var targets = document.querySelectorAll(selector);

      if (entry.intersectionRatio >= 1) {
        // 화면에 보일 때
        // 글자 움직이기
        targets.forEach((target) => {
          target.classList.add("animate__animated", "animate__slideInRight");
        });
      } else {
        // 화면에 안 보일 때
        // 글자 효과 초기화
        targets.forEach((target) => {
          target.classList.remove("animate__animated", "animate__slideInRight");
        });
      }
    });
  }

  var observer = new IntersectionObserver(
    intersectionCallback,
    intersectionOptions
  );

  var target = document.querySelector(selector);
  observer.observe(target);
});
