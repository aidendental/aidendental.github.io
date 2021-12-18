class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <a href=" index.html"><img src="images/logo.svg"></a>
        <div>
          <ul>
            <li><a href="implant.html">임플란트</a></li>
            <li><a href="aesthetic-therapy.html">심미치료</a></li>
            <li><a href="total-therapy.html">통합치료</a></li>
            <li><a href="TMJ.html">턱관절치료</a></li>
            <li><a href="denture.html">틀니치료</a></li>
          </ul>
        </div>
    `;
  }
}

customElements.define("my-header", MyHeader);

/* 
flagsBar을 header랑 묶을 시
div 면적이 커져서 밑의 화면이 안눌리는 범위가 넓어지는 문제 때문에
flagsBar을 따로 뺐습니다.
*/

class flagsBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="flags">
          <a href="index.html">
              <img src="images/korea.png" alt="한국어" />
          </a>
      </section>
      <section class="flags">
          <a href="index-en.html">
              <img src="images/america.png" alt="영어" />
          </a>
      </section>
      <section class="flags">
          <a href="index-ch.html">
              <img src="images/china.png" alt="중국어" />
          </a>
      </section>
    `;
  }
}

customElements.define("flags-bar", flagsBar);

class naverBooking extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<object width="100%" height="100%" type="text/html" data="naver-booking.html" ></object>';
  }
}

customElements.define("naver-booking", naverBooking);

class kakaoAPI extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<object width="100%"height="100%" type="text/html" data="kakao.html" ></object>';
  }
}

customElements.define("kakao-connecting", kakaoAPI);
