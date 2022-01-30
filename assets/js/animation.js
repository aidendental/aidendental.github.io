window.addEventListener("load", function () {
  var intersectionOptions = {
    root: null, // use the viewport
    rootMargin: "0px",
    threshold: 1.0,
  };

  /*** 이미지 위 글자 애니메이션 효과 (대표원장 직접 진료) */
  let firstMainTextID = "#first-main-text";
  function fMainIntersectionCallback(entries, observer) {
    entries.forEach((entry) => {
      var slideItems = document.querySelectorAll(".slide-item1");
      var subText = document.querySelector("#first-sub-text");

      if (entry.intersectionRatio >= 1) {
        // 화면에 보일 때 글자 움직이기
        slideItems.forEach((target) => {
          target.classList.add("animate__animated", "animate__slideHidden");
        });
        subText.style.opacity = 0;
        subText.style.setProperty("animation-delay", "1s");
        subText.classList.add("animate__animated", "animate__slideInRight");
        self.setTimeout(() => {
          subText.style.opacity = 1;
        }, 1750);
      } else {
        // 화면에 안 보일 때 글자 효과 초기화
        slideItems.forEach((target) => {
          target.classList.remove("animate__animated", "animate__slideHidden");
        });
        subText.classList.remove("animate__animated", "animate__slideInRight");
      }
    });
  }

  var firstMainTextObserver = new IntersectionObserver(
    fMainIntersectionCallback,
    intersectionOptions
  );

  var firstMainText = document.querySelector(firstMainTextID);
  firstMainTextObserver.observe(firstMainText);

  /*** 이미지 위 글자 애니메이션 효과 (AIDEN 강하고 단단하게) */

  let secondMainTextID = "#second-main-text";
  function sMainIntersectionCallback(entries, observer) {
    entries.forEach((entry) => {
      var slideItems = document.querySelectorAll(".slide-item2");
      var subText = document.querySelector("#second-sub-text");

      if (entry.intersectionRatio >= 1) {
        // 화면에 보일 때 글자 움직이기
        slideItems.forEach((target) => {
          target.classList.add("animate__animated", "animate__slideHidden");
        });
        subText.style.opacity = 0;
        subText.style.setProperty("animation-delay", "1s");
        subText.classList.add("animate__animated", "animate__slideInRight");
        self.setTimeout(() => {
          subText.style.opacity = 1;
        }, 1750);
      } else {
        // 화면에 안 보일 때 글자 효과 초기화
        slideItems.forEach((target) => {
          target.classList.remove("animate__animated", "animate__slideHidden");
        });
        subText.classList.remove("animate__animated", "animate__slideInRight");
      }
    });
  }

  var secondMainTextObserver = new IntersectionObserver(
    sMainIntersectionCallback,
    intersectionOptions
  );

  var secondMainText = document.querySelector(secondMainTextID);
  secondMainTextObserver.observe(secondMainText);

  /*** 의사 프로필 애니메이션 효과 */

  let doctorID = "#main-text";
  function doctorIntersectionCallback(entries, observer) {
    entries.forEach((entry) => {
      var slideItems = document.querySelectorAll(".slide-item3");
      var doctor = document.querySelector("#doctor");
      var papers = document.querySelectorAll(".paper-item");

      if (entry.intersectionRatio >= 1) {
        // 환자가 미소짓는,행복한~
        slideItems.forEach((target) => {
          target.style.opacity = 0;
          target.style.setProperty("animation-delay", "1s");
          target.classList.add("animate__animated", "animate__slideHidden");

          self.setTimeout(() => {
            target.style.opacity = 1;
          }, 1100);
        });

        // 대표원장 이동인 대학병원 보철과~
        doctor.classList.add("animate__animated", "animate__slideInRight");

        papers.forEach((paper) => {
          paper.style.opacity = 0;
        });
        // 증명서들
        self.setTimeout(() => {
          var i = 0;
          papers.forEach((paper) => {
            paper.style.setProperty(
              "animation-delay",
              "0." + (8 - i * 2) + "s"
            );
            paper.classList.add("animate__animated", "animate__slideInLeft");
            ++i;
            setTimeout(() => {
              paper.style.opacity = 1;
            }, (8 - i * 2) * 100 + 750);
          });
        }, 2000);
      } else {
        // 화면에 안 보일 때 글자 효과 초기화
        slideItems.forEach((target) => {
          target.classList.remove("animate__animated", "animate__slideHidden");
        });
        doctor.classList.remove("animate__animated", "animate__slideInRight");
        papers.forEach((paper) => {
          paper.classList.remove("animate__animated", "animate__slideInLeft");
        });
      }
    });
  }

  var doctorObserver = new IntersectionObserver(
    doctorIntersectionCallback,
    intersectionOptions
  );

  var doctor = document.querySelector(doctorID);
  doctorObserver.observe(doctor);

  /*** 원장님 이력 */
  function historyIntersectionCallback(entries, observer) {
    entries.forEach((entry) => {
      var doctor = document.querySelectorAll("#doctor")[1];
      var history = document.querySelector("#history-div");

      if (entry.intersectionRatio >= 1) {
        // 화면에 보일 때 글자 움직이기
        // 대표원장 이동인 대학병원 보철과~
        doctor.classList.add("animate__animated", "animate__slideInRight");

        // 이력
        history.style.opacity = 0;
        history.style.setProperty("animation-delay", "1s");
        history.classList.add("animate__animated", "animate__fadeIn");
        self.setTimeout(() => {
          history.style.opacity = 1;
        }, 1100);
      } else {
        // 화면에 안 보일 때 글자 효과 초기화
        doctor.classList.remove("animate__animated", "animate__slideInRight");
        history.classList.remove("animate__animated", "animate__fadeIn");
      }
    });
  }

  var historyObserver = new IntersectionObserver(
    historyIntersectionCallback,
    intersectionOptions
  );

  var history = document.querySelector("#history");
  historyObserver.observe(history);

  /*** 진료과목 애니메이션 효과 */

  function subjectIntersectionCallback(entries, observer) {
    entries.forEach((entry) => {
      var targets = document.querySelectorAll(".slide-item6");

      if (entry.intersectionRatio >= 1) {
        // 화면에 보일 때 글자 움직이기
        targets.forEach((target) => {
          target.classList.add("animate__animated", "animate__slideHidden");
        });
      } else {
        // 화면에 안 보일 때 글자 효과 초기화
        targets.forEach((target) => {
          target.classList.remove("animate__animated", "animate__slideHidden");
        });
      }
    });
  }

  var treatmentSubjectObserver = new IntersectionObserver(
    subjectIntersectionCallback,
    intersectionOptions
  );

  var treatmentSubject = document.querySelector(".treatment-subject");
  treatmentSubjectObserver.observe(treatmentSubject);

  /***
   * 진료과목 움직이기
   * 보일 때에만 움직이게 하면 setInterval queue에 이미 들어간 명령 때문에 버벅거려서
   * 그냥 로드되고 계속 움직이게 해뒀습니다.
   * */
  var cardHolder = document.getElementsByClassName(
    "scrolling-wrapper-flexbox"
  )[0];
  var cards = document.getElementsByClassName("cardImg");
  var cardNum = cards.length;

  let scrollWidth = cardHolder.scrollWidth / cardNum;
  var count = 0;

  var interval;

  interval = self.setInterval(() => {
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
        cardHolder.scrollTo({
          left: scrollWidth * count,
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

  // 진료과목 사용자가 스크롤 시 거기부터 다시 스크롤 되도록 하기
  cardHolder.addEventListener("scroll", function () {
    var index = cardHolder.scrollLeft / scrollWidth;
    if (index <= 2) {
      count = index;
    }
    var i = 0;
    for (; i < cardNum; ++i) {
      cards[i].classList.remove(
        "animate__animated",
        "animate__pulse",
        "animate__pulseForSmile"
      );
    }
  });

  var arrows = document.querySelectorAll(".arrow");

  arrows[0].addEventListener("click", function () {
    cardHolder.scrollTo({
      left: count * scrollWidth,
      top: 0,
      behavior: "smooth",
    });
    if (count < cards.length - 1) count++;
    for (var i = 0; i < cardNum; ++i) {
      cards[i].classList.remove(
        "animate__animated",
        "animate__pulse",
        "animate__pulseForSmile"
      );
    }
  });

  arrows[1].addEventListener("click", function () {
    count -= 2;
    cardHolder.scrollTo({
      left: count * scrollWidth,
      top: 0,
      behavior: "smooth",
    });
    for (var i = 0; i < cardNum; ++i) {
      cards[i].classList.remove(
        "animate__animated",
        "animate__pulse",
        "animate__pulseForSmile"
      );
    }
  });

  /*** 소독 영상 에니메이션 */
  function roomVideoIntersectionCallback(entries, observer) {
    entries.forEach((entry) => {
      var slideItems = document.querySelectorAll(".slide-item5");
      var points = document.querySelectorAll(".point");

      if (entry.intersectionRatio >= 1) {
        // 화면에 보일 때 글자 움직이기
        slideItems.forEach((target) => {
          target.classList.add("animate__animated", "animate__slideHidden");
        });
        points.forEach((target) => {
          target.style.opacity = 0;
          target.style.setProperty("animation-delay", "1s");
          target.classList.add("animate__animated", "animate__fadeIn");
        });
        self.setTimeout(() => {
          points.forEach((target) => {
            target.style.opacity = 1;
          });
        }, 1100);
      } else {
        // 화면에 안 보일 때 글자 효과 초기화
        slideItems.forEach((target) => {
          target.classList.remove("animate__animated", "animate__slideHidden");
        });
        points.forEach((target) => {
          target.classList.remove("animate__animated", "animate__fadeIn");
        });
      }
    });
  }

  var roomVideoObserver = new IntersectionObserver(
    roomVideoIntersectionCallback,
    intersectionOptions
  );

  var roomVideo = document.querySelector(".room-text");
  roomVideoObserver.observe(roomVideo);

  /*** 오시는 길 애니메이션 */

  let locationID = "#location";
  function locationIntersectionCallback(entries, observer) {
    entries.forEach((entry) => {
      var slideItems = document.querySelectorAll(".slide-item4");
      var subText = document.querySelector("#smallWelcomeText");
      var information = document.querySelector("#information");

      if (entry.intersectionRatio >= 1) {
        // 화면에 보일 때 글자 움직이기
        slideItems.forEach((target) => {
          target.classList.add("animate__animated", "animate__slideHidden");
        });

        subText.style.opacity = 0;
        subText.style.setProperty("animation-delay", "1s");
        subText.classList.add("animate__animated", "animate__slideInRight");
        self.setTimeout(() => {
          subText.style.opacity = 1;
        }, 1100);

        information.style.opacity = 0;
        information.style.setProperty("animation-delay", "2s");
        information.classList.add("animate__animated", "animate__fadeIn");
        self.setTimeout(() => {
          information.style.opacity = 1;
        }, 2100);
      } else {
        // 화면에 안 보일 때 글자 효과 초기화
        slideItems.forEach((target) => {
          target.classList.remove("animate__animated", "animate__slideHidden");
        });
        subText.classList.remove("animate__animated", "animate__slideInRight");
        information.classList.remove("animate__animated", "animate__fadeIn");
      }
    });
  }

  var locationObserver = new IntersectionObserver(
    locationIntersectionCallback,
    intersectionOptions
  );

  var location = document.querySelector(locationID);
  locationObserver.observe(location);
});
