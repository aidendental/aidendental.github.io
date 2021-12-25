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
      '<object width="100%" type="text/html" data="naver-booking.html" ></object>';
  }
}

customElements.define("naver-booking", naverBooking);

class kakaoAPI extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<object width="100%" type="text/html" data="kakao.html" ></object>';
  }
}

customElements.define("kakao-connecting", kakaoAPI);

class naverBlog extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<object width="100%" type="text/html" data="naverBlog.html" ></object>';
  }
}

customElements.define("naver-blog", naverBlog);

class insta extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<object width="100%" type="text/html" data="insta.html" ></object>';
  }
}

customElements.define("insta-connecting", insta);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="footer" class="text14 color7 bold">
        <img src="images/logo.svg">
        <section>
          <div>
            <p>강남에이든치과의원</p>
            <p>대표자 : 이 동 인</p>
            <p>사업자 등록번호 : 554-36-00942</p>
            <p>위치 : 서울틀별시 강남구 선릉로 578 태정빌딩 3층</p>
            <p>문의전화 : 02-539-2112</p>
          </div>
          <div class="align-center">
            <p>AIDEN DENTAL CLINIC ALL RIGHTS RESERVED. DESIGNED BY. HYEDOII</p>
          </div>
        </section>
      </footer>
    `;
  }
}

customElements.define("my-footer", MyFooter);
