var agent = navigator.userAgent.toLowerCase();

if (
  (navigator.appName == "Netscape" &&
    navigator.userAgent.search("Trident") != -1) ||
  agent.indexOf("msie") != -1
) {
  alert("인터넷 익스플로러 브라우저 입니다.");
} else {
  alert("인터넷 익스플로러 브라우저가 아닙니다.");
}
