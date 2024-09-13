// Navigation toggle for menu
$(".toggle").click(function () {
  $(".toggle, .overlay, .gnb").toggleClass("active");
});
$(".gnb a").click(function () {
  $(".toggle, .overlay, .gnb").removeClass("active");
});

// 스크롤 애니메이션 자바스크립트 코드
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;

  // 새로운 top-section 높이 (최소 20vh)
  const newTopHeight = Math.max(70 - scrollY * 0.2, 20);
  // bottom-section이 점점 위로 올라가며 넓어짐
  const newBottomHeight = Math.min(30 + scrollY * 0.2, 80);

  // 스크롤에 따라 섹션 높이 변경
  document.querySelector(".top-section").style.height = `${newTopHeight}vh`;
  document.querySelector(
    ".bottom-section"
  ).style.height = `${newBottomHeight}vh`;
});

const typeit = new TypeIt("#typeit", {
  speed: 40, // 속도
  startDelay: 1300, // 시작 딜레이 1.3초
  waitUntilVisible: true,
});

// 모바일 화면 체크
const isMobile = window.innerWidth <= 768;

typeit
  .type("// Welcome to My Portfolio<br>", { delay: 200 })
  .type(isMobile ? "<br>" : " ")
  .type('<span class="console">console</span>.<span class="log">log</span>("', {
    delay: 200,
  })
  .type(
    '<span class="portfolio">Hello, and welcome to the portfolio of </span>',
    { delay: 200 }
  )
  .type('<span class="name">노수빈</span>', { delay: 200 })
  .pause(100)
  .delete(3, { delay: 200 })
  .type('<span class="name">Noh Su Bin</span>, ', { delay: 200 })
  .type('<span class="developer">a front-end developer!</span>");', {
    delay: 200,
  })
  .go();
