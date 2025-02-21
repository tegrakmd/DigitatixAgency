barba.init({
  transitions: [
    {
      name: "fade",
      once({ current, next, trigger }) {
        let tl = gsap.timeline();
        tl.to(".cover span", {
          y: "-100%",
          stagger: 0.1,
        });
        tl.to(".cover", {
          y: "-100%",
          opacity: 0,
        });
        tl.from("h1 span", {
          y: 100,
          stagger: 0.2,
          opacity: 0,
        });
        return tl;
      },
      leave({ current, next, trigger }) {
        let tl = gsap.timeline();
        tl.to(".cover span", {
          y: "0%",
          stagger: 0.1,
        });
        tl.to(".cover", {
          y: "0%",
          opacity: 0,
        });
        return tl;
      },
      beforeEnter({ current, next, trigger }) {
        gsap.set(current.app, {
          display: "none",
        });
      },
      enter({ current, next, trigger }) {
        let tl = gsap.timeline();
        tl.to(".cover span", {
          y: "-100%",
          stagger: 0.1,
        });
        tl.to(".cover", {
          y: "-100%",
          opacity: 0,
        });
        tl.from("h1 span", {
          y: 100,
          stagger: 0.2,
          opacity: 0,
        });
        return tl;
      },
    },
  ],
});
