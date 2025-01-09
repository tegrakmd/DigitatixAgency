// marquee
let tween = gsap
  .to(".marquee_part", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.set("marquee_inner", {
  xPercent: -50,
});
// nav
const tl = gsap.timeline({ paused: true });

function revealMenu() {
  revealMenuItems();

  const toggleBtn = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("close-menu");

  toggleBtn.onclick = function (e) {
    tl.reversed(!tl.reversed());
  };
  closeBtn.onclick = function (e) {
    tl.reversed(!tl.reversed());
  };
}
revealMenu();

function revealMenuItems() {
  tl.to(".menu-container", 0.01, {
    height: "210px",
  });
  tl.to(".col-1", 1, {
    left: "-200px",
    ease: "power4.inOut",
  });
  tl.to(
    ".col-2",
    0.025,
    {
      left: "0px",
      ease: "power4.inOut",
    },
    "<"
  );
  tl.to(
    ".col-2 > .menu-item",
    1,
    {
      left: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 0.25,
      },
    },
    "<"
  ).reverse();
}
