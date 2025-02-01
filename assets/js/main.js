gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP parallax effect
// Appliquer l'effet de parallaxe à l'image de fond de la section hero
const heroImage = document.querySelector(".parallax-image");

gsap.fromTo(
  heroImage,
  {
    yPercent: -30, // Déplace l'image de 20% vers le haut au départ
  },
  {
    yPercent: 30, // Déplace l'image de 20% vers le bas à la fin
    ease: "none",
    scrollTrigger: {
      trigger: heroImage.closest(".hero"), // Déclenche l'animation sur la section hero
      start: "top bottom", // Déclenche l'animation lorsque le haut de l'élément atteint le bas de la fenêtre
      end: "bottom top", // Termine l'animation lorsque le bas de l'élément atteint le haut de la fenêtre

      scrub: true, // Rend l'animation fluide avec le défilement
    },
  }
);

// FOOTER
gsap.set("section.footer-container", { yPercent: -50 });

const uncover = gsap.timeline({ paused: true });

uncover.to("section.footer-container", { yPercent: 0, ease: "none" });

ScrollTrigger.create({
  trigger: "section.conclusion",
  start: "bottom bottom",
  end: "+=75%",
  animation: uncover,
  scrub: true,
  // markers: true,
});

ScrollTrigger.refresh();
//

// // GSAP and ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);
// // Animation for hero title using GSAP TweenMax
// gsap.from(".hero_data_desc h1", {
//   duration: 1.5,
//   opacity: 0,
//   y: -50,
//   ease: "power3.out",
//   delay: 0.9,
// });
// // Example animation: Works,Projects
// gsap.utils
//   .toArray(".item_grid_one_card,.item_grid_two_card")
//   .forEach((item, index) => {
//     gsap.from(item, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       scrollTrigger: {
//         trigger: item,
//         start: "top bottom-=100",
//         end: "top center",
//         scrub: true,
//       },
//     });
//   });
// // marquee
// let tween = gsap
//   .to(".marquee_part", {
//     xPercent: -100,
//     repeat: -1,
//     duration: 5,
//     ease: "linear",
//   })
//   .totalProgress(0.5);

// gsap.set("marquee_inner", {
//   xPercent: -50,
// });
// // nav
// const tl = gsap.timeline({ paused: true });

// function revealMenu() {
//   revealMenuItems();

//   const toggleBtn = document.getElementById("menu-toggle");
//   const closeBtn = document.getElementById("close-menu");

//   toggleBtn.onclick = function (e) {
//     tl.reversed(!tl.reversed());
//   };
//   closeBtn.onclick = function (e) {
//     tl.reversed(!tl.reversed());
//   };
// }
// revealMenu();

// function revealMenuItems() {
//   tl.to(".menu-container", 0.01, {
//     height: "210px",
//   });
//   tl.to(".col-1", 1, {
//     left: "-200px",
//     ease: "power4.inOut",
//   });
//   tl.to(
//     ".col-2",
//     0.025,
//     {
//       left: "0px",
//       ease: "power4.inOut",
//     },
//     "<"
//   );
//   tl.to(
//     ".col-2 > .menu-item",
//     1,
//     {
//       left: 0,
//       ease: "power4.inOut",
//       stagger: {
//         amount: 0.25,
//       },
//     },
//     "<"
//   ).reverse();
// }

// cursor

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
