const modal = document.getElementById("modal");

// 모달 띄우기
function modalOn() {
  modal.style.display = "flex";
}

function isModalOn() {
  return modal.style.display === "flex";
}

// 모달 끄기
function modalOff() {
  modal.style.display = "none";
}

// X버튼 누르면 꺼지게 하기
const closeBtn = modal.querySelector(".close-area");
closeBtn.addEventListener("click", (e) => {
  modalOff();
});

// 모달 바깥쪽 누르면 꺼지게 하기
modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal-overlay")) {
    modalOff();
  }
});

// esc 누르면 꺼지게 하기
window.addEventListener("keyup", (e) => {
  if (isModalOn() && e.key === "Escape") {
    modalOff();
  }
});
