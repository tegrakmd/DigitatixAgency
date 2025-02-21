// // Activate the smooth scrolling feature.
// initSmoothScrolling();
const lenis = new Lenis({
  duration: 1.2, // Durée de l'animation de défilement
  smoothWheel: true, // Lissage du défilement de la molette
  wheelMultiplier: 1, // Multiplicateur de vitesse de défilement
});

// Synchroniser Lenis avec ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

// Synchroniser GSAP avec Lenis
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Désactiver le lissage par défaut de GSAP
gsap.ticker.lagSmoothing(0);

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
