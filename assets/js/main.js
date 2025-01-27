const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//

// GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
// Animation for hero title using GSAP TweenMax
gsap.from(".hero_data_desc h1", {
  duration: 1.5,
  opacity: 0,
  y: -50,
  ease: "power3.out",
  delay: 0.9,
});
// Example animation: Works,Projects
gsap.utils
  .toArray(".item_grid_one_card,.item_grid_two_card")
  .forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: "top bottom-=100",
        end: "top center",
        scrub: true,
      },
    });
  });
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

// let parallax, speed;

// parallax = document.querySelectorAll(".parallax-image");

// speed = 0.5;

// window.onscroll = function () {
//   return [].slice.call(parallax).forEach(function (el, i) {
//     let dist;
//     dist = $(window).scrollTop() - $(el).offset().top;
//     return $(el).css("top", dist * speed + "px");
//   });
// };
