// 페이지 로드 시 이전 상태 복원
document.addEventListener("DOMContentLoaded", (event) => {
  const postit = document.querySelectorAll(".postit");
  postit.forEach((postit, index) => {
    // 로컬 스토리지에서 상태 읽기
    const isDone = localStorage.getItem("postit" + index) === "done";
    if (isDone) {
      postit.classList.add("done");
    }
  });
});

// To Do list 클릭 이벤트
const postit = document.querySelectorAll(".postit");
postit.forEach((postit, index) => {
  postit.addEventListener("click", function () {
    // 클래스 토글
    postit.classList.toggle("done");

    // 로컬 스토리지에 상태 저장
    if (postit.classList.contains("done")) {
      localStorage.setItem("postit" + index, "done");
    } else {
      localStorage.setItem("postit" + index, "");
    }
  });
});

// BGM
let audio1 = null; // audio1을 전역 변수로 선언하여 play와 pause에서 모두 접근할 수 있도록 함
let isPlaying = false; // 음악이 재생 중인지 여부를 나타내는 변수

document.querySelector(".btn1").addEventListener("click", function () {
  // 음악이 재생 중이면 멈추고, 재생 중이 아니면 재생
  if (isPlaying) {
    audio1.pause(); // 재생 중인 음악을 멈춤
    isPlaying = false; // 재생 중인지 여부를 false로 변경
  } else {
    audio1 = new Audio("bgm.mp3");
    audio1.loop = true; // 반복재생
    audio1.volume = 0.5; // 음량 설정
    audio1.play(); // bgm.mp3 재생
    isPlaying = true; // 재생 중인지 여부를 true로 변경
  }
});