gsap.registerPlugin(ScrollTrigger);
let lenis;

const SCROLL_TRIGGER_START = "top bottom";
const SCROLL_TRIGGER_END = "bottom top";
const CARD_REVEAL_START = "top 90%";
const CARD_REVEAL_END = "top 65%";
const MARQUEE_DURATION = 20;
const MARQUEE_REPEAT = -1;
const FOOTER_Y_PERCENT = -50;
const FOOTER_END = "+=75%";

const initLenis = () => {
  lenis = new Lenis({
    lerp: 0.05,
    // Infinity: true,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
};
// PARALLAXE
const parallaxe = () => {
  // Sélectionne tous les éléments avec la classe "parallax-image"
  const parallaxImages = document.querySelectorAll(".parallax-image");

  parallaxImages.forEach((image) => {
    gsap.fromTo(
      image,
      { yPercent: -30 },
      {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: image.closest(".pParent"),
          start: SCROLL_TRIGGER_START,
          end: SCROLL_TRIGGER_END,
          scrub: true,
        },
      }
    );
  });
};
// REVEAL
// Sélectionner toutes les cartes
const cardReveal = () => {
  const projectCards = document.querySelectorAll(".card-reveal");

  // Initialiser les cartes (les cacher)
  gsap.set(projectCards, { y: 100, opacity: 0 });

  // Créer une animation pour chaque carte
  projectCards.forEach((card) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: CARD_REVEAL_START,
        end: CARD_REVEAL_END,
        scrub: 1.5,
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
    });
  });
};
//
// Split text into spans
let typeSplit = new SplitType("[text-split]", {
  types: "words, chars",
  tagName: "span",
});
// Link timelines to scroll position
function createScrollTrigger(triggerElement, timeline) {
  // Reset tl when scroll out of view past bottom of screen
  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top bottom",
    onLeaveBack: () => {
      timeline.progress(0);
      timeline.pause();
    },
  });
  // Play tl when scrolled into view (60% from top of screen)
  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top 60%",
    onEnter: () => timeline.play(),
  });
}
$("[words-slide-up]").each(function (index) {
  let tl = gsap.timeline({ paused: true });
  tl.from($(this).find(".word"), {
    opacity: 0,
    yPercent: 100,
    duration: 0.5,
    ease: "back.out(2)",
    stagger: { amount: 0.5 },
  });
  createScrollTrigger($(this), tl);
});
$("[words-rotate-in]").each(function (index) {
  let tl = gsap.timeline({ paused: true });
  tl.set($(this).find(".word"), { transformPerspective: 1000 });
  tl.from($(this).find(".word"), {
    rotationX: -90,
    duration: 0.6,
    ease: "power2.out",
    stagger: { amount: 0.6 },
  });
  createScrollTrigger($(this), tl);
});
$("[words-slide-from-right]").each(function (index) {
  let tl = gsap.timeline({ paused: true });
  tl.from($(this).find(".word"), {
    opacity: 0,
    x: "1em",
    duration: 0.6,
    ease: "power2.out",
    stagger: { amount: 0.2 },
  });
  createScrollTrigger($(this), tl);
});
$("[letters-slide-up]").each(function (index) {
  let tl = gsap.timeline({ paused: true });
  tl.from($(this).find(".char"), {
    yPercent: 100,
    duration: 0.2,
    ease: "power1.out",
    stagger: { amount: 0.6 },
  });
  createScrollTrigger($(this), tl);
});
$("[letters-slide-down]").each(function (index) {
  let tl = gsap.timeline({ paused: true });
  tl.from($(this).find(".char"), {
    yPercent: -120,
    duration: 0.3,
    ease: "power1.out",
    stagger: { amount: 0.7 },
  });
  createScrollTrigger($(this), tl);
});
$("[letters-fade-in]").each(function (index) {
  let tl = gsap.timeline({ paused: true });
  tl.from($(this).find(".char"), {
    opacity: 0,
    duration: 0.2,
    ease: "power1.out",
    stagger: { amount: 0.8 },
  });
  createScrollTrigger($(this), tl);
});
$("[letters-fade-in-random]").each(function (index) {
  let tl = gsap.timeline({ paused: true });
  tl.from($(this).find(".char"), {
    opacity: 0,
    duration: 0.05,
    ease: "power1.out",
    stagger: { amount: 0.4, from: "random" },
  });
  createScrollTrigger($(this), tl);
});
$("[scrub-each-word]").each(function (index) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 90%",
      end: "top center",
      scrub: true,
    },
  });
  tl.from($(this).find(".word"), {
    opacity: 0.2,
    duration: 0.2,
    ease: "power1.out",
    stagger: { each: 0.4 },
  });
});
// Avoid flash of unstyled content
gsap.set("[text-split]", { opacity: 1 });
//
// MARQUEE
const marquee = (item, time, direction) => {
  const mod = gsap.utils.wrap(0, 50);
  return gsap.to(item, {
    duration: time,
    ease: "none",
    x: direction,
    modifiers: {
      x: (x) => (direction = mod(parseFloat(x)) + "%"),
    },
    repeat: MARQUEE_REPEAT,
  });
};
// Marquees
const initMarquees = () => {
  const ambassadors = document.querySelectorAll(".ambassadors--gsap");
  if (!ambassadors.length) return;

  const timeScaleClamp = gsap.utils.clamp(1, 6);

  ambassadors.forEach((block) => {
    const topEl = block.querySelector(".ambassadors__top");
    const bottomEl = block.querySelector(".ambassadors__bottom");

    [topEl, bottomEl].forEach((el) => {
      el.innerHTML += el.innerHTML;
    });

    const master = gsap
      .timeline()
      .add(marquee(topEl, MARQUEE_DURATION, "-=50%"), 0)
      .add(marquee(bottomEl, MARQUEE_DURATION, "+=50%"), 0);

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)));
      },
    });
  });
};

// footer
const footerReveal = () => {
  // FOOTER //
  gsap.set("section.footer-container", { yPercent: FOOTER_Y_PERCENT });

  const uncover = gsap.timeline({ paused: true });

  uncover.to("section.footer-container", { yPercent: 0, ease: "none" });

  ScrollTrigger.create({
    trigger: "section.conclusion",
    start: "bottom bottom",
    end: FOOTER_END,
    animation: uncover,
    scrub: true,
    // markers: true,
  });
};
window.addEventListener("DOMContentLoaded", () => {
  initLenis();
  parallaxe();
  // createScrollTrigger();
  cardReveal();
  initMarquees();
  footerReveal();
  // ScrollTrigger.refresh();
});
