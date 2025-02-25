gsap.registerPlugin(ScrollTrigger);
let lenis;

const initLenis = () => {
  const lenis = new Lenis({
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
          start: "top bottom",
          end: "bottom top",
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
        start: "top 90%",
        end: "top 65%",
        scrub: 1.5,
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
    });
  });
};
// MARQUEE
const marquee = (item, time, direction) => {
  let mod = gsap.utils.wrap(0, 50);
  return gsap.to(item, {
    duration: time,
    ease: "none",
    x: direction,
    modifiers: {
      x: (x) => (direction = mod(parseFloat(x)) + "%"),
    },
    repeat: -1,
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
      .add(marquee(topEl, 20, "-=50%"), 0)
      .add(marquee(bottomEl, 20, "+=50%"), 0);

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
};
window.addEventListener("DOMContentLoaded", () => {
  initLenis();
  parallaxe();
  cardReveal();
  initMarquees();
  footerReveal();
  ScrollTrigger.refresh();
});
