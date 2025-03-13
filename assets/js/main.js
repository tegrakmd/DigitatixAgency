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
    duration: 1, // Durée de l'animation de défilement
    smoothWheel: true, // Lissage du défilement de la molette
    wheelMultiplier: 0.7, // Multiplicateur de vitesse de
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
};
// SCROLL
const createScrollTrigger = () => {
  gsap.utils.toArray("[data-speed]").forEach((element) => {
    const speed = parseFloat(element.dataset.speed);
    gsap.fromTo(
      element,
      { y: speed * -100 },
      {
        y: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: SCROLL_TRIGGER_START,
          end: SCROLL_TRIGGER_END,
          scrub: true,
        },
      }
    );
  });
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

// conter

const counter = () => {
  const counterButton1 = document.querySelector(".counter ");
  const counterButton = document.querySelector(".counter p");
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const updateScrollPercentage = () => {
    const scrollPosition = window.scrollY;
    const scrollPercentage = Math.round((scrollPosition / docHeight) * 100);
    counterButton.textContent = scrollPercentage + "%";
  };

  // Initial update
  updateScrollPercentage();

  // Update on scroll
  window.addEventListener("scroll", updateScrollPercentage);

  //
  counterButton1.addEventListener("click", () => {
    lenis.scrollTo("top", { duration: 5 });
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

// Baffles
const baffles = () => {
  let quote = baffle(".quote");

  quote
    .set({
      characters: "░▓▓ >▓█/▒ /<░▒▒ ▒░█ ▒█<▒▓ ▓▓▒▓ ▒▒░ ▒█▓█ █▒░░",
      speed: 100,
    })
    .start()
    .reveal(4000, 1000);
};
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

// logoAnimation Transition timelin

const transTime = () => {
  const logoAnim = document.querySelector(".logo");
  const navAnim = document.querySelector(".menu-btn-open");
  const countAnim = document.querySelector(".counter");

  const tl = gsap.timeline();

  tl.from(logoAnim, {
    y: -10,
    opacity: 0,
    duration: 1.5,
  })
    .from(
      navAnim,
      {
        y: -10,
        opacity: 0,
        duration: 1.5,
      },
      "<0.5" // Démarre 0.2s après le début de l'animation précédente
    )
    .from(
      countAnim,
      {
        y: 100,
        opacity: 0,
        duration: 1.5,
      },
      "<0.5"
    ); // Démarre 0.2s après le début de l'animation précédente
};

//
// gsap.to(".clip-reveal", {
//   clipPath: "polygon(0 0%, 100% 100%, 100% 100%, 0 100%)",
//   opacity: 1,
//   y: -100,
//   duration: 5,
//   stagger: 0.2,
//   ease: "power4.out",
// });

window.addEventListener("DOMContentLoaded", () => {
  initLenis();
  transTime();
  parallaxe();
  createScrollTrigger();
  cardReveal();
  initMarquees();
  counter();
  baffles();

  footerReveal();

  ScrollTrigger.refresh();
});
