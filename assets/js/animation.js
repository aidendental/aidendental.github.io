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
      var subText = document.querySelector(".sub-text");

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
      var subText = document.querySelectorAll(".sub-text")[1];

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
      var history = document.querySelector("#history");
      var box = document.querySelector("#box");

      if (entry.intersectionRatio >= 1) {
        // 화면에 보일 때 글자 움직이기

        // 환자가 미소짓는,행복한~
        slideItems.forEach((target) => {
          target.classList.add("animate__animated", "animate__slideHidden");
        });

        // 대표원장 이동인 대학병원 보철과~
        doctor.style.opacity = 0;
        doctor.style.setProperty("animation-delay", "1s");
        doctor.classList.add("animate__animated", "animate__slideInRight");
        self.setTimeout(() => {
          doctor.style.opacity = 1;
        }, 1750);

        // 이력
        history.style.opacity = 0;
        history.style.setProperty("animation-delay", "1.75s");
        history.classList.add("animate__animated", "animate__fadeIn");
        self.setTimeout(() => {
          history.style.opacity = 1;
        }, 2500);

        // 이력 뒤 푸른색 박스
        box.classList.add("animate__animated", "animate__fullSlideInUp");
      } else {
        // 화면에 안 보일 때 글자 효과 초기화
        slideItems.forEach((target) => {
          target.classList.remove("animate__animated", "animate__slideHidden");
        });
        doctor.classList.remove("animate__animated", "animate__slideInRight");
        history.classList.remove("animate__animated", "animate__fadeIn");
        box.classList.remove("animate__animated", "animate__fullSlideInUp");
      }
    });
  }

  var doctortObserver = new IntersectionObserver(
    doctorIntersectionCallback,
    intersectionOptions
  );

  var doctor = document.querySelector(doctorID);
  doctortObserver.observe(doctor);

  /*** 진료과목 애니메이션 효과 */

  let treatmentSubjectID = "#treatment-subject-text";
  function subjectIntersectionCallback(entries, observer) {
    entries.forEach((entry) => {
      var targets = document.querySelectorAll(treatmentSubjectID);

      if (entry.intersectionRatio >= 1) {
        // 화면에 보일 때 글자 움직이기
        targets.forEach((target) => {
          target.classList.add("animate__animated", "animate__slideInRight");
        });
      } else {
        // 화면에 안 보일 때 글자 효과 초기화
        targets.forEach((target) => {
          target.classList.remove("animate__animated", "animate__slideInRight");
        });
      }
    });
  }

  var treatmentSubjectObserver = new IntersectionObserver(
    subjectIntersectionCallback,
    intersectionOptions
  );

  var treatmentSubject = document.querySelector(treatmentSubjectID);
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

  /*** 소독 영상 에니메이션 */

  /*** 오시는 길 애니메이션 */
});
