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

//
//

//

// const parallaxImage = document.querySelector(".parallax-image");
// const parallaxParent = document.querySelector(".pParent");

// gsap.fromTo(
//   parallaxImage,
//   {
//     yPercent: -30, // Déplace l'image de 20% vers le haut au départ
//   },
//   {
//     yPercent: 30, // Déplace l'image de 20% vers le bas à la fin
//     ease: "none",
//     scrollTrigger: {
//       trigger: heroImage.closest(".pParent"), // Déclenche l'animation sur la section hero
//       start: "top bottom", // Déclenche l'animation lorsque le haut de l'élément atteint le bas de la fenêtre
//       end: "bottom top", // Termine l'animation lorsque le bas de l'élément atteint le haut de la fenêtre
//       scrub: true, // Rend l'animation fluide avec le défilement
//     },
//   }
// );

// <!--  -->
//     <!-- lenis -->
//     <!-- <script src="https://unpkg.com/lenis@1.0.45/dist/lenis.min.js"></script> -->
//     <!--  -->
//     <!-- <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script> -->
//     <!--  -->
